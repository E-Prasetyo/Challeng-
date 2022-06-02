/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'
import imgLogo from '../../Assets/img/logo.png'
import useAuth from '../../Hooks/useAuth';

const navigation = [
  { name: 'Our Service', href: '/service', current: false, type: 'text' },
  { name: 'Why US', href: '#', current: false, type: 'text' },
  { name: 'Testimonial', href: '#', current: false, type: 'text' },
  { name: 'FAQ', href: '#', current: false, type: 'text' },
  { name: 'Register', href: '#', current: false, type: 'link' },
  { name: 'Logout', href: '#', current: false, type: 'button' },
]

function classNameCostume(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavbarUser = ({tag}) => {
    const authCtx = useAuth();
    const navigate = useNavigate();
    const handleHome =()=>{
        return navigate('/')
    }
    
  return (
    <Fragment>
        <Disclosure as="nav" className="bg-cyan-100">
        {({ open }) => (
            <>
            <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-start">
                    <img
                        className="block h-8 w-auto"
                        src={imgLogo}
                        alt="Workflow"
                        onClick={() => handleHome()}
                    />
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        {navigation.map((item) => (
                        <div key={item.name}>
                        { item.type === 'text' && 
                            <Link
                                to={item.href}
                                className={classNameCostume(
                                item.name === tag ? 'bg-cyan-500' : 'text-black font-bold hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        }
                        { item.type === 'link' && 
                            <Link
                                to='/register'
                                className='group bg-emerald-500 rounded-md p-1 text-white hover:bg-emerald-800'
                            >
                                <span className='group-hover:text-gray-300 p-2'>{item.name}</span>
                            </Link>
                        }
                        { item.type === 'button' && 
                            <button
                                onClick={() => authCtx.setLogOut()}
                                className='group bg-blue-500 rounded-md p-1 text-white hover:bg-emerald-800'
                            >
                                <span className='group-hover:text-gray-300 p-y5'>{item.name}</span>
                            </button>
                        }
                        </div>
                        ))}
                    </div>
                </div>
                </div>
                </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNameCostume(
                        item.current ? 'bg-gray-900 text-black' : 'text-black-300 hover:bg-cyan-300 hover:text-white',
                        'block px-8 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    >
                    {item.type === 'button' ? (
                        <Link
                            to='/register'
                            className='group bg-emerald-500 rounded-md p-2 text-white hover:bg-emerald-800'
                        >
                            <span className='group-hover:text-gray-300'>{item.name}</span>
                        </Link>
                    ):(
                        item.name
                    )}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </Fragment>
  )
}

export default NavbarUser