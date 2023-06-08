import React from 'react';
import { whyData } from '../data/whyChose.js';
import { ServiceCard } from '../components';

function About() {
  return (
    <div className='sm:w-[100%] z-50 mt-[50px] sm:mt-[100px]'>
    <div className='sm:w-[80%]  sm:mt-[50px] ml-auto mr-auto mb-[20px]'>
      <div className='sm:w-[50%] p-4 sm:p-0'>
        <h1 className='text-4xl text-darkBlue text-center sm:text-start'>Why choose Easybank?</h1>
        <p className='mt-[20px] text-xl text-grayishBlue text-center sm:text-start'>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>
      <div className='flex flex-col flex-col-reverse sm:flex-row justify-between items-center mt-[50px]'>
        {whyData.map((item, index) => {
          return <ServiceCard dataContent={item} key={`${item.service} ${index}`} />
        }) }
      </div>
      </div>
      </div>
  )
}

export default About