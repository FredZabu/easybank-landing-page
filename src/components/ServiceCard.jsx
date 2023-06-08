import React from 'react'

function ServiceCard(props) {
    const { img, service, description } = props.dataContent;
  return (
      <div className='w-full p-4 flex-col  justify-between align-center sm:p-0 sm:w-[250px]'>
          <div className='flex justify-center sm:block'>
              <img src={img} alt="" srcset="" />
          </div>
          <h3 className='mt-[20px] text-xl  text-darkBlue text-center sm:text-start'>{service}</h3>
          <p className='mt-[20px] text-xl sm:text-[16px] text-grayishBlue text-center sm:text-start'>{ description}</p>
    </div>
  )
}

export default ServiceCard