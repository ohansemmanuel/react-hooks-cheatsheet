import React from 'react'
import Logo from '../asset/logo.png'

const Hero = () => {
  return (
    <div>
      <img
        src={Logo}
        alt='react hooks cheatsheet'
        style={{
          width: '70%',
          maxWidth: '100%',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </div>
  )
}

export default Hero
