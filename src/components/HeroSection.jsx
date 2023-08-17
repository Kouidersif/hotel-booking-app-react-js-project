import React from 'react'

const HeroSection = () =>(

    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-[100%] h-[100%] object-fit'
        src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg' alt="" />
        <div className='bg-black/30 absolute top-0 left-0 w-[100%] h-[100%]' />
        <div className='absolute w-[100%] h-[100%] top-0 left-0 flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p className='text-xl'>All Inclusive</p>
                <h1>Private & beaches & Gateways</h1>
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ratione nisi molestias nam, 
                    inventore ad odio harum cum! Architecto, voluptatibus nisi!
                </p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>


)

export default HeroSection