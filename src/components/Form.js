import React from 'react'

const Form = () => {
  return (
    <div className=' w-3/6 p-5 my-8 flex items-center justify-around'>
      <div className='border-0'>
        <input type="text" placeholder='Enter your name' className='outline-0	px-4 py-2 bg-transparent border border-2 border-white-500 focus:outline-none text-white  placeholder:text-white rounded'  />
      </div>
      <div>
      <input type="email" placeholder='Enter your email' className='outline-0	px-4 py-2 bg-transparent border border-2 border-white-500 focus:outline-none text-white  placeholder:text-white rounded'  />
      </div>
      <div>
        <button className='bg-white px-3 py-2 text-base	rounded	uppercase font-bold '>submit</button>
      </div>

    </div>
  )
}

export default Form