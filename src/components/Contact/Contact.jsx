import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

export default function Contact() {
  return (
    <div className='main contact mt-100'>
      <div className="container">
        <h2 className="text-uppercase mb-3 fs-1 main-color pt-5">contact section</h2>
        <div className="under-line d-flex justify-content-center align-items-center mb-3 mx-auto">
            <div className='line bg-main'></div>
            <div className='px-3'><FontAwesomeIcon className="main-color" icon={faStar} /></div>
            <div className='line bg-main'></div>
        </div>
        <form className='d-flex flex-column w-50 mx-auto mt-5 p-3'>
          <input className='border-0 border-bottom p-3 mb-4' placeholder='usserName' type="text" />
          <input className='border-0 border-bottom p-3 mb-4' placeholder='userAge' type="text" />
          <input className='border-0 border-bottom p-3 mb-4' placeholder='userEmail' type="text" />
          <input className='border-0 border-bottom p-3 mb-4' placeholder='userPassword' type="text" />
          <button className='btn bg-sec text-white mt-3'>send Message</button>
        </form>
      </div>
    </div>
  )
}
