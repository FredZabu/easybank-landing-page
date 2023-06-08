import React from 'react'
import logo from '../assets/images/logo.svg';
import { icons, about, service } from '../data/footerData';
import { InviteBtn } from '../components';
function Footer() {
  return (
    <div className='bg-darkBlue pt-[20px] pb-[20px]'>
    <div className='w-[85%] h-[100%] ml-[auto] mr-[auto] flex flex-col sm:flex-row justify-between items-center '>
      <div className='flex flex-col justify-between  '>
        <div className='mt-[20px]'><img src={logo} alt="" srcset="" /></div>
        <div className='flex mt-[20px]'>
          {icons.map((icon, index) => {
            return <img key={`${index} icon`} className='hover:fill-limeGreen mr-[10px] cursor-pointer' src={icon} alt="" srcset="" />
          })}
        </div>
        </div>
        <div className='mt-[20px] flex-1 flex items-center flex-col'>
          {about.map((item, index) => {
            return <h3 key={`${item} ${index}`} className='hover:text-limeGreen mb-[10px] text-white transition duration-500 ease-in-out cursor-pointer'>{ item }</h3>
          })}
        </div>
        <div className='mt-[20px] flex-1 flex items-center flex-col'>
          {service.map((item, index) => {
            return <h3 key={`${item} ${index}`} className='hover:text-limeGreen text-white mb-[10px] transition duration-500 ease-in-out cursor-pointer'>{ item }</h3>
          })}
        </div>
        <div className='flex flex-col items-center sm:items-end flex-1'>
          <div className='mb-[20px]' >
            <InviteBtn />
          </div >
          
          <p className='text-grayishBlue'>&copy; Easybank.All rights Reserved</p>
        </div>
      </div>
      </div>
  )
}

export default Footer