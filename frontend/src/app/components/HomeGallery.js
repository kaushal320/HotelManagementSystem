'use client';

import FsLightbox from "fslightbox-react";
import { useState } from "react";


export default function HomeGallery() {
    const[toggler,setToggler]=useState(false);
    return (
        <section className="container my-5">
            <FsLightbox
            toggler={toggler}
            sources={
                [
                    "banners/1.jpg",
                    "banners/1.jpg",
                    "banners/1.jpg",

                ]
            }
            />
            <h2 className="my-5 text-center">Gallery<button onClick={()=>setToggler(!toggler)} 
                className="float-end fs-5 btn text-white hms-bg-dark">View All</button></h2>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                            
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                           
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                          
                    </div>
                    
                </div>
                
                
            </div>
            <div className="row text-center mt-5">
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                            
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                           
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                          
                    </div>
                    
                </div>
                
                
            </div>

        </section>
    );
}