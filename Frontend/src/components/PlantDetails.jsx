 import React from 'react'
import { TulsiDetails } from './data'

const PlantDetails = () => {
  return (
    <div id='tulsi-data' className='m-auto border-2 border-black max-w-[1300px] flex justify-between border-box mt-5'>
      <div id='left' className='h-96 w-[20%]'>
        <p><a href='#morphology' className='cursor-pointer'>Morphology</a></p>
        <p><a href='#phytochemicals' className='cursor-pointer'>Phytochemicals</a></p>
        <p><a href='#uses' className='cursor-pointer'>Uses</a></p>

        <ul className='list-disc'>
            <div className='px-12'>
              <li className='cursor-pointer'>
                <a href="">Culinary</a>
              </li>
              <li className='cursor-pointer'>
                <a href="">ThaiCuisine</a>
              </li>
              <li className='cursor-pointer'>
                <a href="">InsectRepellent</a>
              </li>
              <li className='cursor-pointer'>
                <a href="">Nematicidal</a>
              </li>
              <li className='cursor-pointer'>
                <a href="">Disinfection</a>
              </li>
            </div>
          </ul>
        
      </div>
      <div id='mid' className='w-[60%] bg-green-500'>
        
          <h1 className='text-[2.5rem] underline'>{TulsiDetails.botanicalName}</h1>
          <p className=''>{TulsiDetails.description}</p>
          <h2 id='morphology' className='text-[1.5rem] font-semibold'>Morphology</h2>
          <p>{TulsiDetails.morphology}</p>
          <h2 id='phytochemicals' className='text-[1.5rem] font-semibold'>Phytochemicals</h2>
          <p>{TulsiDetails.phytochemicals}</p>
          <p id='uses' className='text-[1.5rem] font-semibold'>Uses:</p>
          <ul className='list-disc'>
            <div className='px-12'>
              <li>
                <h2 className='text-[1.2rem] font-medium'>Culinary</h2>
                <p>{TulsiDetails.uses.culinary}</p>
              </li>
              <li>
                <h2 className='text-[1.2rem] font-medium'>ThaiCuisine</h2>
                <p>{TulsiDetails.uses.thaiCuisine}</p>
              </li>
              <li>
                <h2 className='text-[1.2rem] font-medium'>InsectRepellent</h2>
                <p>{TulsiDetails.uses.insectRepellent}</p>
              </li>
              <li>
                <h2 className='text-[1.2rem] font-medium'>Nematicidal</h2>
                <p>{TulsiDetails.uses.nematicidal}</p>
              </li>
              <li>
                <h2 className='text-[1.2rem] font-medium'>Disinfection</h2>
                <p>{TulsiDetails.uses.disinfection}</p>
              </li>
            </div>
          </ul>
      </div>
      <div id='right' className='h-96 w-[20%] bg-red-500'></div>
    </div>
  )
}

export default PlantDetails
