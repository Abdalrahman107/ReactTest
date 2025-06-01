import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; 

export default function Footer() {
  return (
    <>
    <div className="footer bg-main p-5">
         <div className='container'>
            <div className="row text-white">
                <div className="col-md-4 p-3">
                    <div className="inner">
                        <h3 className="pt-4">LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>   
                </div>
                <div className="col-md-4 p-3">
                    <div className="inner">
                        <h3 className="pt-4">AROUND THE WEB</h3>
                            <ul className="d-flex justify-content-center gap-3 ">
                            <li className=''><FontAwesomeIcon icon={faFacebook} /></li>
                            <li className=''><FontAwesomeIcon icon={faTwitter} /></li>
                            <li className=''><FontAwesomeIcon icon={faLinkedinIn} /></li>
                            <li className=''><FontAwesomeIcon icon={faGlobe} /></li>
                            </ul>
                    </div>   
                </div>
                <div className="col-md-4 p-3">
                    <div className="inner">
                        <h3 className="pt-4">ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-footer p-2">
        <p className="text-center text-white pt-2">Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
