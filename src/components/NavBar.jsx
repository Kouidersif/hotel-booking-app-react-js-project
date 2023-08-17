import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {

    const [ isToggled, setIsToggled ] = useState(false)


    return (
        <div className='absolute w-full flex justify-between p-4 items-center '>
            <h1 className='text-white text-2xl z-20'>M Hotel</h1>
            <AiOutlineMenu className='text-white cursor-pointer z-20' size={35} onClick={()=> setIsToggled(!isToggled)} />
            <div className={`${ isToggled ? "fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 flex-col z-10" : "hidden" }`}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='p-8'>Home</li>
                    <li className='p-8'>Destinations</li>
                    <li className='p-8'>Booking</li>
                    <li className='p-8'>Amenities</li>
                    <li className='p-8'>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar