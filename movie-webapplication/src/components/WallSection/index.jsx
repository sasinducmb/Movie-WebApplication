import React from 'react'
import image1 from "../../assets/Wallpaper1.jpg"
import image2 from "../../assets/Wallpaper2.jpeg"
import image3 from "../../assets/Wallpaper3.jpg"
import "./wallsection.css"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const index = () => {


  const fadeImages = [
    {
      url: image1,
      caption: 'First Slide'
    },
    {
      url: image2,
      caption: 'Second Slide'
    },
    {
      url: image3,
      caption: 'Third Slide'
    },
  ];

  return (
    <div className='WallSection'>
       
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='each-fade'>
            <img  src={fadeImage.url}  className='fade-image'/>
          </div>
        ))}
      </Fade>
    </div>

      <div className='WallText'>
          <h1>Movie Section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, veritatis quibusdam aut quisquam rerum a alias quis qui deleniti fugiat accusamus culpa natus odit cumque? Eaque eligendi est fuga hic?</p>

      </div>
    </div>
 
  )
}

export default index