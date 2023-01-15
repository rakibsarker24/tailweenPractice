import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <>
      <div className='topber border-b border-subbrand'>
            <div className="flex justify-between max-w-container m-auto px-2 py-3 align-middle">

                    <div className="text-para">
                        <img className='w-[120px]' src="images/logo.png" alt="LOGO" />
                    </div>

                    <div className="pt-3">
                          <div className="">
                              <ul className='flex'>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2 '><Link to='#' >Home</Link></li>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2'><Link to='#' >About Us</Link></li>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2'><Link to='#' >Services</Link></li>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2'><Link to='#' >Portfolio</Link></li>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2'><Link to='#' >Gallery</Link></li>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2'><Link to='#' >Blog</Link></li>
                                <li className='text-para text-normal text-sm hover:text-subbrand ease-in px-2'><Link to='#' >Contact</Link></li>
                              </ul>
                          </div>
                    </div>

                    <div className="leading-10">
                          <CgProfile className='inline-block text-para text-xl hover:text-subbrand ease-in cursor-pointer'/>
                    </div>
            </div>
      </div>
    </>
  )
}

export default Navber