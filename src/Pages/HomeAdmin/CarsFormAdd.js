import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import carsService from '../../Services/carsService';

const CarsFormAdd = () => {
const navigate =  useNavigate();
const [fileImage, setFileImage] = useState(null); 
const [image, setImage] = useState(null);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [capacity, setCapacity] = useState();
const [status, setStatus] = useState('');
const [isLoading, setIsLoading] = useState(false);

const onChangeImage = e => {
    setFileImage(e.target.files[0])
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
};

const handleInputChange = (evt) =>{
    if(evt.target.id === 'name'){
        setName(evt.target.value)
    }else if (evt.target.id === 'price') {
        setPrice(evt.target.value)
    }else if (evt.target.id === 'category') {
        setCapacity(evt.target.value)
    }else if (evt.target.id === 'status') {
        setStatus(evt.target.value)
    }
}

const handleSubmit = (value) =>{
    value.preventDefault();
    setIsLoading(true);
    const data = {
        name: name,
        category: capacity,
        price: price,
        status: status,
        image: fileImage
    }
    // dispatch(AddNewCar(data));
    carsService.AddNewCar(data).then((res) => {
        if (res.status === 201) {
            setIsLoading(false)
            setTimeout(() => {
                return navigate('/admin/cars?crt=true')
            }, 1000);
        } else {
            setIsLoading(false);
            alert('Failed New data')
        }
    })
}

console.log(isLoading)
  return (
      <>
      {isLoading && <Loading />}
        <div className='full-body-height flex flex-col'>
            <div className='text-sm py-3 px-5'>
            <span className='font-bold'>Car > </span>
            <span className='font-bold'>List Car > </span>
            <span className='font-bold text-gray-500'>Add New Car</span>
            </div>
            <div className='text-lg font-bold py-1 px-5'>
                Add New Car
            </div>
            <div className="mt-12 bg-white mx-4 border-2">
            <form 
                    className='w-full flex flex-col p-10 gap-5' 
                    onSubmit={handleSubmit}
                >
                    <div className='w-full flex flex-row gap-2'>
                        <label className='w-72 p-1 text-gray-500' htmlFor='name'>
                            Name*
                        </label>
                        <input 
                            className="w-full p-1 border-2 rounded"
                            id='name' 
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                    </div>
                    <div className='flex flex-row gap-2 w-full'>
                        <label className='w-72 p-1 text-gray-500' htmlFor='price'>
                            Price*
                        </label>
                        <input 
                            className="w-full p-1 border-2 rounded"
                            id='price'
                            type='text'
                            placeholder='Price'
                            value={price}
                            onChange={(e) => handleInputChange(e)}
                            required
                        />
                    </div>
                    <div className='flex flex-row gap-2 w-full'>
                        <label className='w-72 p-1 text-gray-500' htmlFor='category'>
                            Category*
                        </label>
                        <select 
                            className={`w-full p-1 border-2 rounded border-r-white
                            ${capacity ? 'text-black' : 'text-gray-400'} `}
                            id='category' 
                            name='category' 
                            value={capacity||'default'} 
                            onChange={(e)=>handleInputChange(e)}
                            required
                        > 
                            <option value='default' disabled>
                                Select Capacity
                            </option>
                            <option value='small'>small</option>
                            <option value='medium'>medium</option>
                            <option value='large'>large</option>
                        </select>
                    </div>
                    <div className='flex flex-row gap-2 w-full'>
                        <label className='w-72 p-1 text-gray-500' htmlFor='status'>
                            Status*
                        </label>
                        <select 
                            id='status' 
                            name='status' 
                            className={`w-full p-1 border-2 rounded border-r-white
                            ${capacity ? 'text-black' : 'text-gray-400'}`}
                            value={status||'default'} 
                            onChange={(e)=>handleInputChange(e)}
                            required
                        >
                            <option value='default' disabled>Select Status</option>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </select>
                    </div>
                    <div className=''>
                        <div className='flex flex-row gap-2 w-full'>
                            <label className='w-72 p-1 text-gray-500' htmlFor='image'>
                                Foto*
                            </label>
                            <div className='w-full flex flex-row'>
                                <input 
                                    className="w-full p-1 
                                    border-2 rounded border-r-white"
                                    id='image' 
                                    type='file'
                                    placeholder='Price'
                                    onChange={(e)=> onChangeImage(e)}
                                    required
                                /> 
                                <img 
                                    className=''
                                    width={100} 
                                    height={100} 
                                    src={image} 
                                    alt=''     
                                />
                            </div>
                        </div>
                        <div className='flex justify-end w-full mt-16'>
                            <button type='submit' 
                                className="
                                    outline py-2 px-4 bg-blue-800 text-white
                                    rounded-lg hover:bg-cyan-500 hover:text-black"
                            >
                               Save 
                            </button>
                        </div>
                    
                    </div>
                    
            </form>
            </div>
        </div>
    </>
  )
}

export default CarsFormAdd