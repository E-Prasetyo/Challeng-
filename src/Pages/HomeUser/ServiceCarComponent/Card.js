import React from "react";
import { Link } from "react-router-dom";
import iconOne from '../../../Assets/img/fi_users.png'
import iconTwo from '../../../Assets/img/fi_settings.png'
import iconThree from '../../../Assets/img/fi_settings.png'

const Card = ({item}) => {
    const priceRP = new Intl.NumberFormat('id-ID', 
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
    .format(item?.price);
    
    return(
        <div className='border border-black p-5 rounded-lg'>
            <img 
                className='img-cars-card' 
                src={item?.image} 
                alt={item?.name} 
            />
            <div className='flex flex-col gap-1 my-2'>
                <p className='font-title'>{item?.name} / {item?.category}</p>
                <p className='font-price'>{priceRP} / hari</p>
                <p className='font-title'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className='flex flex-row gap-2'>
                    <img className='icon-size' src={iconOne} alt='' />
                    <span className='font-rent'>
                        {item?.category ? item?.category : 'capacity'} 
                    </span>
                </div>
                <div className='flex flex-row gap-2'>
                    <img className='icon-size' src={iconTwo} alt='' />
                    <span className='font-rent'>
                        {/* {item?.updatedAt ?  : '-'}  */}
                        Matic
                    </span>
                </div>
                <div className='flex flex-row gap-2'>
                    <img className='icon-size' src={iconThree} alt='' />
                    <span className='font-rent'>
                        2020
                    </span>
                </div>
                <div className='flex flex-row justify-around px-10 mt-2 gap-2'>
                    <Link
                        to={`/service/car/${item?.id}`} 
                        className=" w-full
                        bg-emerald-500 hover:bg-emerald-300 font-semibold 
                        text-white py-2 px-4 border border-emerald-800 rounded
                        hover:text-emerald-600"
                    >
                        <span className='flex justify-center items-center gap-2'>
                        <span>Pilih Mobil</span>
                        </span>
                    </Link>
                </div>
            </div>
            </div>
        )
}
export default Card