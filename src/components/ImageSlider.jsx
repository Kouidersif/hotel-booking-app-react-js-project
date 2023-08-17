import React from 'react'
import {imgsObjects} from "../Slides"
import { useState } from 'react';
import { FcNext, FcPrevious} from "react-icons/fc"


const ImageSlider = () => {
    console.log(imgsObjects[0].title)
    const [ currentIndex, setcurrentIndex ] = useState(0);

    const showPrev = ()=>{
        const isFirst = currentIndex === 0 ;
        const newIndex = isFirst ? imgsObjects.length - 1 : currentIndex -1;
        setcurrentIndex(newIndex) 
    }
    const ShowNext = ()=>{
        const isLast = currentIndex === imgsObjects.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1
        setcurrentIndex(newIndex)
    }

    return (
        
        <>
        <h3 className='text-center mb-6 font-bold text-6xl'>Enjoy some pics from the outside</h3>
        <div className='max-w-[1400px] h-[580px] 
        w-full m-auto px-4 py-16 relative group'>
        <img src={imgsObjects[currentIndex].link} alt="images"
        className='w-[100%] h-[100%] object-contain' />
        
        <FcPrevious size={40} onClick={()=> showPrev() }  className='absolute top-[50%] -translate-x-0 
        -translate-y-[-50%] left-0 text-2xl rounded-full p-2
        cursor-pointer group-hover:bg-black/20 text-white'  />
        <FcNext size={40}  onClick={()=> ShowNext() } className='absolute top-[50%] -translate-x-0 
        -translate-y-[-50%] right-0 text-2xl rounded-full p-2
        cursor-pointer group-hover:bg-black/20 text-white'  />
        
            
        </div>
        </>
    )
}

export default ImageSlider