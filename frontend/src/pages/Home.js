import React from 'react'
import tomato from "../assets/tomato.jpg"
import Body from './Body'
import Landing from './Landing'


function Home() {
  return (
    
      <div className='main' >
        <div className="overlay">
            <img className='photo' src={tomato}></img>
        <div className="content">
            <Landing/>
        </div>
        <div className='body_class'>
            <Body/>
        </div>
      </div>
    </div>

  )
}

export default Home