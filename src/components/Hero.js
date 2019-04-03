import React from 'react'
import Logo from '../asset/logo.png'

const Hero = () => {
  return (
    <div>
      <img
        src={Logo}
        alt='react hooks cheatsheet'
        style={{
          width: '60%',
          maxWidth: '100%',
          display: 'block',
          margin: '50px auto'
        }}
      />
    </div>
  )
}

export default Hero
