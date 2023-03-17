import React from 'react'

const HeroBtn = ({text}) => {
  return (
    <div className="flex justify-center">
    <p className="bg-secondary px-16 py-1.5 text-white text-base md:text-lg clip-btn">
      {text}
    </p>
  </div>
  )
}

export default HeroBtn