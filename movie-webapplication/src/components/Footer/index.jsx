import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const index = () => {
  return (
    <div className=" Footer-Section">
      <div className="container d-flex footer">
        <div className="Footer-Left">
          <span>IT Group</span>
          <br />
          <span>C.Salvador de Madariaga,1</span>
          <br />
          <span>28027 Madrid</span>
          <br />
          <span>Spain</span>
        </div>
        <div className="  Footer-Right">
          <span>Follow us on</span>
          <TwitterIcon className="mx-3" />
          <YouTubeIcon className="mx-1" />
        </div>
      </div>
      <hr style={{width:'95%',backgroundColor:'white'}}/>
      <div className='container d-flex copyright'>
        <div>
          <p>Copyright © 2022 IT Hote ls. All rights reserved.</p>
        </div>
        <div>
          <p>
            Photos by Felix Mooneeram & <u>Serge Kutuzov</u> on <u> Unsplash</u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index