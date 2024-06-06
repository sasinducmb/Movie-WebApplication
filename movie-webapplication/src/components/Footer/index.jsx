import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const index = () => {
  return (
    <div className='Footer-Section'>
      <div className='Footer-Left'>

          <span>IT Group</span><br/>
          <span>C.Salvador de Madariaga,1</span><br/>
          <span>28027 Madrid</span><br/>
          <span>Spain</span>
      </div>
      <div className='Footer-Right'>
          <span>Follow us on</span>
          <TwitterIcon/>
          <YouTubeIcon/>
      </div>
          </div>
  )
}

export default index