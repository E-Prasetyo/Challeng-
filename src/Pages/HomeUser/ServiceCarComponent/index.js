import React, { useEffect } from 'react'
import useAuth from '../../../Hooks/useAuth'
import Card from './Card'

const CardCars = (props) => {
    const { cars } = props;
    const authCxt = useAuth();
    const search = authCxt.search
    const isTrueSet = (search === 'true') ? true : false

    console.log('search',search)
    let content
    if(search){
        content = cars?.filter((value) => value.status === isTrueSet )?.map((item, i)=> <Card item={item} key={i} />)
    }else{
        content = cars?.map((item, i)=> <Card item={item} key={i} />)
    }
   
    useEffect(() => {
    }, [search])
    

  return (
    <div className='grid grid-cols-3 gap-10'>
        {content?.length < 1 ? <p className='col-span-3 text-center'>Data Tidak ditemukan</p> : content}
    </div>
  )
}

export default CardCars