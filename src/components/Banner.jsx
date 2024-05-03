import React from 'react'
import { bannerImg } from '../Stores/Data/banner'

function Banner() {
  return (
    <div className="banner">
        <div className="banner-image">
            <img src={bannerImg} alt=''> </img>
            
        </div>

    </div>
  )
}

export default Banner