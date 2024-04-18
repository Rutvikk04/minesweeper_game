import React from 'react'

const Instructions = () => {
  return (
    <div className='pt-12 text-white flex flex-col items-center'>
      <h1 className='font-semibold text-3xl max-md:2xl text-center'>How To Play?</h1>
      <ul className='text-start'>
        <li>👉 Choose Difficulty by choosing hidden mine count: <b className='text-green-500'>1 mine for Easy</b>, <b className='text-yellow-500'>2 for Medium </b>and  <b className='text-red-500'>3 for Hard</b></li>
        <li>👉 Reveal Box by tapping on it</li>
        <li>👉If you press on Mine then Game Over💥</li>
      </ul>
    </div>
  )
}

export default Instructions
