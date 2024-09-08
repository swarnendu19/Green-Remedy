import React from 'react';
import { TulsiDetails } from './data';
import { Table } from './Table';


const PlantDetails = () => {
  return (
    <div
      id='tulsi-data'
      className='m-auto max-w-[1500px] flex justify-between border-box p-5 -mt-[10rem]'
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dtffsa7p9/image/upload/v1725820250/bg_a7wlnu.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Left navigation with sticky behavior */}
      <div
        id='left'
        className='h-[100vh] w-[20%] bg-white/60 p-3 rounded-l-lg shadow-lg flex flex-col items-center space-y-8'
        style={{
          position: 'sticky',
          top: '0', // Sticks when it reaches the top of its container
          alignSelf: 'flex-start', // Ensures that it scrolls initially
        }}
      >
        <img
          src='https://res.cloudinary.com/dtffsa7p9/image/upload/v1725820115/plantDetailsimg1_wsaqfg.webp'
          alt='Tulsi Plant'
          className='rounded-lg w-full h-40 object-cover shadow-md hover:scale-[1.05] duration-300'
        />
        <div className='flex flex-col space-y-2'>
          <p><a href='#morphology' className='text-[1.15rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Morphology</a></p>
          <p><a href='#phytochemicals' className='text-[1.15rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Phytochemicals</a></p>
          <p><a href='#uses' className='text-[1.15rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Uses</a></p>
          <div className='-ml-2'>
            <ul className='list-disc'>
              <div className='px-12'>
                <li><a href="#culinary" className='text-[1.08rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Culinary</a></li>
                <li><a href="#thaiCuisine" className='text-[1.08rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Thai Cuisine</a></li>
                <li><a href="#insectRepellent" className='text-[1.08rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Insect Repellent</a></li>
                <li><a href="#nematicidal" className='text-[1.08rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Nematicidal</a></li>
                <li><a href="#disinfection" className='text-[1.08rem] text-green-800 font-medium cursor-pointer hover:text-green-600 transition-colors duration-300'>Disinfection</a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Mid section */}
      <div
        id='mid'
        className='w-[55%] p-6 bg-white/80 shadow-lg'
      >
        <h1 className='text-[2.5rem] underline text-green-800 font-bold'>{TulsiDetails.botanicalName}</h1>
        <p className='text-green-900'>{TulsiDetails.description}</p>
        <h2 id='morphology' className='text-[1.5rem] font-semibold text-green-700 mt-4'>Morphology</h2>
        <p>{TulsiDetails.morphology}</p>
        <h2 id='phytochemicals' className='text-[1.5rem] font-semibold text-green-700 mt-4'>Phytochemicals</h2>
        <p>{TulsiDetails.phytochemicals}</p>
        <h2 id='uses' className='text-[1.5rem] font-semibold text-green-700 mt-4'>Uses:</h2>
        <ul className='list-disc px-12'>
          <li>
            <h3 id='culinary' className='text-[1.2rem] font-medium text-green-600'>Culinary</h3>
            <p>{TulsiDetails.uses.culinary}</p>
          </li>
          <li>
            <h3 id='thaiCuisine' className='text-[1.2rem] font-medium text-green-600'>Thai Cuisine</h3>
            <p>{TulsiDetails.uses.thaiCuisine}</p>
          </li>
          <li>
            <h3 id='insectRepellent' className='text-[1.2rem] font-medium text-green-600'>Insect Repellent</h3>
            <p>{TulsiDetails.uses.insectRepellent}</p>
          </li>
          <li>
            <h3 id='nematicidal' className='text-[1.2rem] font-medium text-green-600'>Nematicidal</h3>
            <p>{TulsiDetails.uses.nematicidal}</p>
          </li>
          <li>
            <h3 id='disinfection' className='text-[1.2rem] font-medium text-green-600'>Disinfection</h3>
            <p>{TulsiDetails.uses.disinfection}</p>
          </li>
        </ul>
      </div>

      {/* Right section with sticky behavior */}
      <div
        id='right'
        className='h-auto w-[25%] bg-white/70 p-3 rounded-r-lg shadow-lg flex flex-col items-center space-y-5'
        style={{
          position: 'sticky',
          top: '0', // Sticks when it reaches the top of its container
          alignSelf: 'flex-start', // Ensures that it scrolls initially
        }}
      >
        <img
          src='https://res.cloudinary.com/dtffsa7p9/image/upload/v1725819642/plantDetailsimg4_ww7mex.webp'
          alt='Herbal Plant'
          className='rounded-lg w-full h-40 object-cover shadow-md hover:scale-[1.05] duration-300'
        />
        <Table />
        <img
          src='https://res.cloudinary.com/dtffsa7p9/image/upload/v1725819652/plantDetailsimg3_s0x0j5.jpg'
          alt='Herbal Plant'
          className='rounded-lg w-full h-40 object-cover shadow-md hover:scale-[1.05] duration-300'
        />
        <img
          src='https://res.cloudinary.com/dtffsa7p9/image/upload/v1725819658/plantDetailsimg2_s6nf9s.png'
          alt='Herbal Plant'
          className='rounded-lg w-full h-40 object-cover shadow-md hover:scale-[1.05] duration-300'
        />

      </div>
    </div>
  );
};

export default PlantDetails;
