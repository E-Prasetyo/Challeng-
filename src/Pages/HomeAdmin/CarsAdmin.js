/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import CarsList from './CarsList';
import NotifCar from '../../Components/NotifCars';
import carsService from '../../Services/carsService';
import Loading from '../../Components/Loading'

const CarsAdmin = () => {
  const navigate = useNavigate();
  const [openTab, setOpenTab] = useState(1);
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataCars, setDataCars] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [failedLoad, setFailedLoad] = useState('');



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
    if (searchParams.get('crt') === 'true') {
      setMsg('Create Success')
      setModal(true)
      setTimeout(() => {
        setModal(false)
        setMsg('');
        setSearchParams({});
      }, 2000);
    }
  }, [])


  console.log(dataCars)

  const handleAddCar = () =>{
    return navigate('/admin/cars/create');
  }

  return (
    <>
      {modal && <NotifCar message={msg} />}
      {isLoading && <Loading />}
        <div className='full-body-height flex flex-col'>
            <div className='text-sm py-3 px-5'>
              <span className='font-bold'>Car > </span>
              <span className='font-bold text-gray-500'>List Car</span>
            </div>
            <div className='flex flex-row justify-between my-2'>
              <div className='text-lg font-bold py-1 px-5'>
                List Car
              </div>
              <button
                className="
                  bg-blue-800 px-4 py-1 mr-12 text-white border rounded
                  hover:bg-blue-200 hover:border-blue-500
                  hover:text-blue-800
                "
                onClick={()=> handleAddCar()}
              >
                + Add Car
              </button>
            </div>
            
            {/* Tab */}
              <div className="flex flex-row mx-5">
                <div className="w-full">
                  <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-3"
                    role="tablist"
                  >
                    <li className="text-center">
                      <a
                        className={
                          "text-xs font-bold py-1 px-3 rounded block leading-normal " +
                          (openTab === 1
                            ? "text-blue-800 bg-gray-300 border border-blue-800 "
                            : "text-gray-400 bg-white"
                            )}
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                      All
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        className={
                          "text-xs font-bold py-1 px-3 rounded block leading-normal " +
                          (openTab === 2
                            ? "text-blue-800 bg-gray-300 border border-blue-800 "
                            : "text-gray-400 bg-white"
                          )}
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                      >
                        Small
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        className={
                          "text-xs font-bold py-1 px-3 rounded block leading-normal " +
                          (openTab === 3
                            ? "text-blue-800 bg-gray-300 border border-blue-800 "
                            : "text-gray-400 bg-white border border-gray-300"
                          )}
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                      >
                        Medium
                      </a>
                    </li>
                    <li className="text-center">
                      <a
                        className={
                          "text-xs font-bold py-1 px-3 rounded block leading-normal " +
                          (openTab === 4
                            ? "text-blue-800 bg-gray-300 border border-blue-800 "
                            : "text-gray-400 bg-white border border-gray-300"
                          )}
                        onClick={e => {
                          e.preventDefault();
                          setOpenTab(4);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                      >
                        Large
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-col w-full h-full">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                          <CarsList 
                            tab='all' 
                            data={dataCars}
                            failedLoad={failedLoad} 
                          />
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                          <CarsList 
                            tab='small' 
                            data={dataCars}
                            failedLoad={failedLoad} 
                          />
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                          <CarsList 
                            tab='medium' 
                            data={dataCars}
                            failedLoad={failedLoad} 
                          />
                        </div>
                        <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                          <CarsList 
                            tab='large' 
                            data={dataCars}
                            failedLoad={failedLoad} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* Tab */}
            
        </div>
    </>
  )
}

export default CarsAdmin