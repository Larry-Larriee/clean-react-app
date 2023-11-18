import './App.css'
import React from 'react'
import image from './assets/image.jpeg'

export default function App() {
  return (
    <body>
      <div className='section-container'>
        <img src={image} alt='robot'/>
        <div className='section-container-text'>
          <h1>HELLO</h1>
          <p>This is an image of a robot from our very cool skool WHS</p>
        </div>
      </ div>
    </ body>
  )
}
