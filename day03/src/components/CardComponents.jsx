import React from 'react'
import categories from './../utility/data';

const CardComponents = ({ categories }) => {
  return (
    <>
      {categories.map((val) => (
        <div className='w-[26rem] h-52 flex hover:shadow-red-100 hover:shadow-xl rounded-2xl text-slate-200 '>
          <div className=' w-[40%] h-50'>
            <img className='w-full h-full rounded-l-2xl object-cover' src={val.image} alt='Book'></img>
          </div>
          <div className='w-[60%] bg-pink-600 rounded-r-2xl p-5 flex flex-col justify-between'>
            <div>
              <h1 className='text-2xl font-bold my-2'>{val.name}</h1>
              <p className='text-sm'>{val.description}</p>
            </div>
            <button className='w-full h-10 bg-pink-400 rounded-xl hover:bg-pink-200 hover:text-black'>Buy</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardComponents