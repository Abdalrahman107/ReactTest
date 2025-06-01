import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"; 

export default function About() {
  return (
    <>
      <div className="main bg-sec mt-100 d-flex align-items-center">
        <div className="container">
          <h2 className="text-uppercase mb-3 fs-1 text-white">about component</h2>
          <div className="under-line d-flex justify-content-center align-items-center mb-3 mx-auto">
              <div className='line bg-white'></div>
              <div className='px-3'><FontAwesomeIcon className="text-white" icon={faStar} /></div>
              <div className='line bg-white'></div>
          </div>
          <div className="row p-4">
            <div className="col-md-6">
              <p className="text-light text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p className="text-light text-start">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
