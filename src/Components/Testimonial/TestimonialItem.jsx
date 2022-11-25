import React from 'react'

const TestimonialItem = ({emoji, des, profileImg, profileName, location}) => {
  return (
    <>
       <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
          <dir className="text-4xl">{emoji}</dir>
          <dir className="py-5"> 
            <p className='text-lg '>"{des}"</p>
          </dir>
          <dir className="flex items-center justify-start my-4 gap-5">
            <div className='w-16'>
              <img className='bg-slate-200 p-2 rounded-full' src={profileImg} alt="profileLogo1" />
            </div>
            <div>
              <h3 className='text-2xl font-extrabold'>{profileName}</h3>
              <p>{location}</p>
            </div>
          </dir>
        </div>
    </>
  )
}

export default TestimonialItem