import React from 'react'

const Footer = () =>(
    <div className='w-full m-auto bg-gray-900 py-10 px-2 mt-24'>
        <div className='flex flex-row justify-around 
        md:flex-wrap sm:flex-wrap text-white'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul className=''>
                    <li className="py-1 text-sm">Demo content</li>
                    <li className="py-1 text-sm">Demo content</li>
                    <li className="py-1 text-sm">Demo content</li>
                    <li className="py-1 text-sm">Demo content</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul >
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Pricing</h6>
                <ul>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                    <li className='py-1 text-sm'>Demo content</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold uppercase pt-2'> Subscript To Our NewsLetter</h6>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quidem.
                </p>
                <form className='flex gap-3'>
                    <input type="text" placeholder='Enter your Email' className='w-full py-2 rounded-sm px-1' />
                    <button className='rounded-lg hover:bg-white hover:text-black hover:-translate-y-2 ease-in duration-300'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
)

export default Footer