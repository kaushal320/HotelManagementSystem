'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeBanner(){
    return(
        <Carousel showThumbs={false}>
                <div>
                    <img src="banners/1.jpg" />
                 
                </div>
                <div>
                    <img src="banners/image.jpg"/>
                   
                </div>
            </Carousel>

    );

}