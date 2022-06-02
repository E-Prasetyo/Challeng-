import React, { useEffect, useState } from 'react'
import { Loading, NavbarUser } from '../../Components'
import { useForm, Controller } from 'react-hook-form'
import Header from './LandingPage/Header'
import iconUser from '../../Assets/img/fi_users.png'
import CardList from './ServiceCarComponent'
import carsService from '../../Services/carsService'
import useAuth from '../../Hooks/useAuth'

const ServiceCars = () => {
    const authCxt = useAuth();
    const { register, control, handleSubmit } = useForm();
    const search = authCxt.search;
    const [isLoading, setIsLoading] = useState(false)
    const [dataCars, setDataCars] = useState()
    const [failedLoad, setFailedLoad] = useState('')

    const onSubmit = (value) =>{
        authCxt.setShowCars(value.type_driver)       
    }

    useEffect(() => {
        setIsLoading(true)
        carsService.getAllCars().then((res) => {
          if (res.status === 200) {
            setDataCars(res.data)
            setIsLoading(false)
          }else {
            setFailedLoad(res.statusText)
            setIsLoading(false)
          }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    let content;
    if(authCxt.showCars){
        content = <CardList cars={dataCars} />
    }else{
        content = <div className='text-center w-full'>{failedLoad}</div>
    }
    
  return (
    <>
        {isLoading && <Loading />}
        <NavbarUser tag="Our Service" />
        <Header/>
        <div className='-translate-y-5 flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <div className='grid grid-cols-5 rounded-lg bg-white shadow-lg'>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='type_driver' className='text-sm'>
                            Type Driver
                        </label>
                        <Controller
                            control={control} 
                            name="type_driver"                                           
                            defaultValue={search||""}                                                                        
                            render={({ field: { onChange, value, ref }}) => (
                                <select
                                    onChange={onChange}
                                    // name="type_driver"
                                    className='border-2 rounded'
                                    ref={ref}
                                    value={value}
                                    required
                                >
                                    <option value="" disabled>Open this select menu</option>
                                    <option value="true">Dengan Supir</option>
                                    <option value="false" className="text-red-800 bg-red-300">
                                        Tanpa Supir  (Lepas Kunci)
                                    </option>
                                </select>
                            )}
                            />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='date' className='text-sm'>
                            Date
                        </label>
                        <input 
                            className='border-2 rounded'
                            id='date'
                            type='date' 
                            {...register('date')}
                        />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='time' className='text-sm'>
                            Waktu Jemput/Ambil
                        </label>
                            <input 
                                className='border-2 rounded'
                                id='timer'
                                type='time' 
                                {...register('time')}
                            />
                    </div>
                    <div className='flex flex-col justify-center p-2 gap-1'>
                        <label htmlFor='capacity' className='text-sm'>
                            Capacity
                        </label>
                        <div className='flex flex-row border-2 rounded'>
                            <input 
                                id='capacity'
                                type='text' 
                                {...register('capacity')}
                            />
                            <span className='bg-white'>
                                <img fill='black' src={iconUser} alt='' />
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-center p-3 gap-1'>
                        <button type='submit' className='bg-emerald-500 border-2 px-4 rounded-lg'>
                            Cari Mobil
                        </button> 
                    </div>
                </div>
            </form>
        </div>
        <div className='flex flex-col px-10'>
            {content}
        </div>
    </>
  )
}

export default ServiceCars