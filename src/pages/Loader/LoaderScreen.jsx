import React from 'react'
import './styles.css'
import Banner from '../../Assets/pictures/LoaderBanner.png'

const LoaderScreen = () => {
  return (
    <div className="loader-container">
    <div className="loader-wrapper">
      <div className="blur-effect"></div>
      <div class="spinner-container">
        <img src={Banner} alt="FlexSport" className="spinner-image" />
        <div class="spinner"></div>
        
      </div>
      <h1>Loading...</h1>
    </div>
  </div>
  )
}

export default LoaderScreen
