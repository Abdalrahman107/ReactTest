import React from 'react'
import avatar from '../../assets/avataaars.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
export default function Startframework() {
  return (
    <>
        <div className="main bg-sec mt-100 d-flex align-items-center">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="item text-white p-5">
                    <img src={avatar} className='w-75 mb-3' alt="" />
                    <h2 className="text-uppercase mb-3 fs-1">start Framework</h2>
                    <div className="under-line d-flex justify-content-center align-items-center mb-3 mx-auto">
                        <div className='line bg-white'></div>
                        <div className='px-3'><FontAwesomeIcon className="text-white" icon={faStar} /></div>
                        <div className='line bg-white'></div>
                    </div>
                    <p className="text-light">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    </>
  )
}
