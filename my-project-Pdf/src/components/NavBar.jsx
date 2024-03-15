import { BiExport } from "react-icons/bi"; 
import { BiCalendarCheck } from "react-icons/bi"; 
import { FaFilePdf } from "react-icons/fa"; 
import { AiFillHome } from "react-icons/ai"; 

import React from 'react'
import MenuLateral from "./MenuLateral";


const Navbar = () => {
return (
    <div className='w-72 bg-gray-800 fixed h-full px-4 py4'>
        <div className="my-2 mb-4">
            <h1 className='text-2x text-white font-bold'>
                Admin Dashboard
            </h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover: sadow hover:bg-blue-500 py-4'>
            <a href=''className='px-3'>
                <AiFillHome className='inline-block w-6 h-6 mr-2 -mt-2'></AiFillHome>
                inicio
            </a>
            </li>
            <li className='mb-2 rounded hover: sadow hover:bg-blue-500 py-4'>
            <a href=''className='px-3'>
                <BiExport BiArchiveIn className='inline-block w-6 h-6 mr-2 -mt-2'></BiExport>
                archivos
            </a>
            </li>
            <li className='mb-2 rounded hover: sadow hover:bg-blue-500 py-4'>
            <a href=''className='px-3'>
                <BiCalendarCheck  className='inline-block w-6 h-6 mr-2 -mt-2'></BiCalendarCheck >
                Aprobar SAF
            </a>
            </li>
            <li className='mb-2 rounded hover: sadow hover:bg-blue-500 py-4'>
            <a href=''className='px-3'>
                <FaFilePdf className='inline-block w-6 h-6 mr-2 -mt-2'></FaFilePdf>
                Descargar PDF
            </a>
            </li>

        </ul>
    </div>
)
}

export default Navbar;

