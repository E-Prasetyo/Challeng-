/* eslint-disable jsx-a11y/anchor-is-valid */
/* This Dropdwon requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import useAuth from '../../Hooks/useAuth';


export default function DropDown() {
  const authCtx = useAuth();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-center items-center rounded-full bg-white text-sm font-medium text-gray-700 hover:bg-gray-500">
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
              <Menu.Item>
                  <button
                    type="submit"
                    className='bg-white text-gray-900 p-3'
                    onClick={() => authCtx.setLogOut()}
                  >
                    Sign out
                  </button>
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
