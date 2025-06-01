import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons"; 
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

export default function Portfolio() {
  const [imgSrc, setImgSrc] = useState('/');

  const handleClick = (e)=>{
    setImgSrc(e.target.src)
  }

  return (
   <>
         <div className="main portfolio mt-100">
           <div className="container d-flex flex-column justify-content-center align-items-center ">
               <h2 className="text-uppercase mb-3 fs-1 main-color pt-5">portfolio component</h2>
               <div className="under-line d-flex justify-content-center align-items-center mb-3 mx-auto">
                   <div className='line bg-main'></div>
                   <div className='px-3'><FontAwesomeIcon className="main-color" icon={faStar} /></div>
                   <div className='line bg-main'></div>
               </div>
               <div className="row gy-4">
                  <div className="col-md-6 col-lg-4 item">
                    <div className="inner">
                      <div className="image position-relative">
                        <img src={img1} onClick={handleClick} className='w-100 rounded-4' alt="photo" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <div className="layer position-absolute start-0 end-0 top-0 bottom-0 opacity-0 bg-sec  rounded-4">
                        </div>
                        <div className="plus position-absolute start-50 top-50 translate-middle">
                        <FontAwesomeIcon className="text-white" icon={faPlus}/>
                        </div>
                      </div>                                   
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 item">
                    <div className="inner">
                      <div className="image position-relative">
                        <img src={img2} onClick={handleClick} className='w-100 rounded-4' alt="photo" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <div className="layer position-absolute start-0 end-0 top-0 bottom-0 opacity-0 bg-sec  rounded-4">
                        </div>
                        <div className="plus position-absolute start-50 top-50 z-2 translate-middle">
                        <FontAwesomeIcon className="text-white" icon={faPlus}/>
                        </div>
                      </div>                                   
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 item">
                    <div className="inner">
                      <div className="image position-relative">
                        <img src={img3} onClick={handleClick} className='w-100 rounded-4' alt="photo" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <div className="layer position-absolute start-0 end-0 top-0 bottom-0 opacity-0 bg-sec  rounded-4">
                        </div>
                        <div className="plus position-absolute start-50 top-50 z-2 translate-middle">
                        <FontAwesomeIcon className="text-white" icon={faPlus}/>
                        </div>
                      </div>                                   
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 item">
                    <div className="inner">
                      <div className="image position-relative">
                        <img src={img1} onClick={handleClick} className='w-100 rounded-4' alt="photo" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <div className="layer position-absolute start-0 end-0 top-0 bottom-0 opacity-0 bg-sec  rounded-4">
                        </div>
                        <div className="plus position-absolute start-50 top-50 z-2 translate-middle">
                        <FontAwesomeIcon className="text-white" icon={faPlus}/>
                        </div>
                      </div>                                   
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 item">
                    <div className="inner">
                      <div className="image position-relative">
                        <img src={img2} onClick={handleClick} className='w-100 rounded-4' alt="photo" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <div className="layer position-absolute start-0 end-0 top-0 bottom-0 opacity-0 bg-sec  rounded-4">
                        </div>
                        <div className="plus position-absolute start-50 top-50 z-2 translate-middle">
                        <FontAwesomeIcon className="text-white" icon={faPlus}/>
                        </div>
                      </div>                                   
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 item">
                    <div className="inner">
                      <div className="image position-relative">
                        <img src={img3} onClick={handleClick} className='w-100 rounded-4' alt="photo" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        <div className="layer position-absolute start-0 end-0 top-0 bottom-0 opacity-0 bg-sec  rounded-4">
                        </div>
                        <div className="plus position-absolute start-50 top-50 z-2 translate-middle">
                        <FontAwesomeIcon className="text-white" icon={faPlus}/>
                        </div>
                      </div>                                   
                    </div>
                  </div> 
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog d-flex justify-content-center align-items-center">
                      <div className="modal-content">    
                        <div className="modal-body p-0">
                          <img src={imgSrc} className='w-100' alt="photo"/>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
           </div>
         </div>
       </>
  )
}
