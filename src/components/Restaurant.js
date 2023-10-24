import React from 'react'

const Restaurant = () => {
  return (
    <div className='space-y-4 rounded-lg shadow-xl w-36'>
      <img className='w-36 rounded-md h-28' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ecbd9a23c0fdeb8efad7d5cb847ccb35' alt='img' />
      <div className='space-y-0'>
        <h1>Restaurant Name</h1>
        <h1>Time & Rating</h1>
        <h1 className='text-slate-500'>Indian, Healthy Food</h1>
      </div>
    </div>
  )
}

export default Restaurant