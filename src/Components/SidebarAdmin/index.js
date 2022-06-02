import React, { useState } from 'react';
import imgLogo from '../../Assets/img/Rectangle 63.jpg'
import imgLogo2 from '../../Assets/img/Rectangle 62.png'
import imgDashboard from '../../Assets/img/fi_home.png'
import imgCar from '../../Assets/img/fi_truck.png' 
import { 
  MenuIcon, SearchIcon,
} from '@heroicons/react/outline'; 
import {DropDown} from '../../Components'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SidebarAdmin = ({children, active}) => {
  // const [active, setActive] = useState('1');
  const [activeSub, setActiveSub] = useState('1a');
  const authCtx = useAuth();
  const user = authCtx.user

  return (
    <div className='flex flex-row'>
    {/* sidebar */}
      <div className='bg-blue-800 w-16 py-4 overflow-y-auto h-screen min-h-screen  relative'>
        <img className='w-10 h-10 mx-2' src={imgLogo} alt='' />
        <div className='py-4'>
        <Link to='/'> 
          <div className={`flex flex-col hover:bg-cyan-50/50 py-5 ${active === "1" ? 'bg-cyan-50/50':''}`}>
            <div className='flex justify-center'>
              <img className='w-8 h-8' src={imgDashboard} alt='' />
            </div> 
            <p className='text-center text-white text-xs'><small>Dashboard</small></p>
          </div>
        </Link>
        <Link to='/admin/cars'> 
          <div className={`flex flex-col hover:bg-cyan-50/50 py-5 ${active === "2" ? 'bg-cyan-50/50':''}`}>
            <div className='flex justify-center'>
              <img className='w-8 h-8' src={imgCar} alt='' />
            </div>
            <p className='text-center text-white text-xs'><small>Cars</small></p>
          </div>
        </Link>
        </div>
      </div>
    {/* sidebar2 */}
      <div className='w-screen flex flex-col'>
          {/* navbar */}
          <div className='flex flex-row py-4 content-center bg-white drop-shadow-lg'>
            <div className='w-36'>
              <img className='w-24 h-8 mr-2 md:mr-6 lg:mr-12 px-2 my-1' src={imgLogo2} alt='' />
            </div>
            <div 
              className='flex flex-row w-full justify-between items-stretch h-full px-5'
            >
              <div className='flex items-center'>
                <MenuIcon  className="block h-6 w-6" />
              </div>
              <div className='flex flex-row my-1 gap-3'>
              <div className='flex flex-row'>
                <div className='flex flex-row items-center border-2 border-r-0 border-gray-400 bg-white w-fit'>
                  <SearchIcon className="block h-6 w-6 p-1 text-gray-500" />
                  <input className='w-28 mx-2' type='text' name='search' placeholder='Search' />
                </div>
                  <button className='bg-white px-2 border-2 border-gray-500 text-blue-500 font-bold'>
                    Search
                  </button>
              </div>
                <div className='flex flex-row items-center gap-2 px-2'>
                  <div className='bg-blue-300 rounded-full w-6 h-6 text-center'>
                    T
                  </div>
                  <p className='truncate w-20'>
                    {user}
                  </p>
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
          {/* Sub Sidebar */}
          <div className='flex flex-row'>
            <div className='flex flex-col w-36 full-body-height drop-shadow'>
              <div className='px-3 text-slate-500 text-md bg-white py-3'>
                {active !== '2' ? "Dashboard":"Cars"}
              </div>
              <div 
               className={`text-black px-3 font-bold text-sm bg-white py-3 ${activeSub === '1a' ? 'bg-slate-300/75':''}`}
               onClick={() => setActiveSub('1a')}
              >
                {active !== '2' ? "Dashboard":"Cars"}
              </div>
            </div>
            {/* Content */}
            <div className='w-full bg-gray-100 full-body-height'>
              {children}
            </div>
          </div> 
      </div>
    </div>
  )
}

export default SidebarAdmin