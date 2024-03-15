import { BsList } from "react-icons/bs"; 
import { FaUserCircle } from "react-icons/fa"; 
import { FaBell } from "react-icons/fa"; 
import { BiSearch } from "react-icons/bi"; 

import React from 'react'

const MenuLateral = () => {
return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between ml-72'>
        <div className='flex items-center text-xl'>
            <BsList   className="text-white me-4 cursor-pointer"/>
            <span className="text-white font-semibold"> Tribunal De Cuenta </span>
        </div>
        <div className="flex items-center gap-x-5">
            <div className="relative md:w-65">
                <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none text-white md:text-black"><BiSearch /></button></span>
                    <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"/>
            </div>
        <div className="text-white"><FaBell className="w-6 h-6" /></div>

        <div className="relative">
            <button className="text-white group">
                <FaUserCircle className="w-6 h-6 mt-1"/>
                <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-2">
                    <ul className="py-2 text-sm text-gray-950" >
                        <li><a href="">profile</a></li>
                        <li><a href=""></a>setting</li>
                        <li><a href=""></a>log out</li>
                    </ul>
                </div>
            </button>
        </div>
        </div>


    </nav>

)
}

export default MenuLateral
