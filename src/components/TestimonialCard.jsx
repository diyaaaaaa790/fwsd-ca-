import React from 'react'

const TestimonialCard = ({name,review}) => {
  return (
    <div className='p-6 text-2xl border border-pink-600 mx-20 my-10 rounded-lg shadow-lg hover:scale-105 transistion-all duration-300 ease-in-out'>
        <h2 className='text-gray-600 font-bold'>Name: {name}</h2>
        <p className='text-gray-600'>Review: {review}</p>   
    </div>
  )
}

export default TestimonialCard;