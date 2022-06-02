import React from 'react'
import iconOne from '../../../Assets/img/fi_users.png'
import iconTwo from '../../../Assets/img/fi_settings.png'
import iconThree from '../../../Assets/img/fi_settings.png'
import Accordion from './Accordion';
// import ModalImage from "react-modal-image";

const ServiceDetailItems = (props) => {
  const {car, handlePayment} = props;
  const priceRP = new Intl.NumberFormat('id-ID', 
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
    .format(car.price);

  
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-row gap-5'>
        <div className='w-full p-5 shadow-sm border-2 rounded-lg'>
          <p className='text-lg font-bold'>Tentang Paket</p>
          <p className='mt-3 px-3 text-md font-bold text-gray-500'>
            Include
          </p>
          <ul className='list-disc px-10 text-gray-500'>
            <li>Apa saja yang termasuk dalam paket misal durasimax 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p className='mt-3 px-3 text-md font-bold text-gray-500'>
            Exclude
          </p>
          <ul className='list-disc px-10 text-gray-500'>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <div className='my-5'>
            <Accordion />
          </div>
        </div>
        {/* 2 */}
        <div className='w-full shadow-sm'>
          <div className='border-2 p-5 rounded-lg'>
            {/* <ModalImage
                className='px-10 w-full h-72'
                small={car.image}
                large={car.image}
                showRotate={true}
                alt={car.name}
            /> */}
            <img src={car.image} alt={car.name} />
            <div className=''>
              <p className='text-lg font-bold py-5'>
                {car.name} / {car.category}
              </p>
              <div className='flex flex-row gap-3'>
                <div className='flex flex-row gap-1'>
                    <img className='icon-size' src={iconOne} alt='' />
                    <span className='font-rent'>
                        {car.category ? car.category : 'capacity'} 
                    </span>
                </div>
                <div className='flex flex-row gap-1'>
                    <img className='icon-size' src={iconTwo} alt='' />
                    <span className='font-rent'>
                        Matic
                    </span>
                </div>
                <div className='flex flex-row gap-1'>
                    <img className='icon-size' src={iconThree} alt='' />
                    <span className='font-rent'>
                        2020
                    </span>
                </div>
              </div>
              <div className='flex flex-row justify-between py-10 font-bold'>
                  <p className='text-lg'>Total</p>
                  <p className='text-lg'>
                      {priceRP}
                  </p>
              </div>
              <button 
                className='
                  w-full p-2 bg-emerald-500 text-white border rounded
                  hover:bg-emerald-400 hover:text-gray-500 
                  hover:border-emerald-800'
                onClick={handlePayment}
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <button 
          className='
            py-2 px-10 bg-emerald-500 text-white border rounded
            hover:bg-emerald-400 hover:text-gray-500 
            hover:border-emerald-800'
          onClick={handlePayment}
        >
          Lanjutkan Pembayaran
        </button>
      </div>
    </div>
  )
}

export default ServiceDetailItems