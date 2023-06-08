import React from 'react';
import InviteBtn from './InviteBtn';
import phoneImage from '../assets/images/image-mockups.png';
import desktopBg from '../assets/images/bg-intro-desktop.svg'
import mobileBg from '../assets/images/bg-intro-mobile.svg';

function Header() {
  return (
      <div className='flex flex-col flex-col-reverse sm:flex-row items-center sm:w-[90%]  sm:ml-[10%] h-[90vh] '>
          <div className='flex-1 flex items-center sm:items-start flex-col px-4'>
              <h1 className='text-center sm:text-start text-4xl sm:text-5xl text-darkBlue'>Next generation digital banking</h1>
              <p className='text-center sm:text-start text-xl my-6 text-grayishBlue'> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
              <InviteBtn />
          </div>
          <div className='relative w-full h-[50%]   sm:flex-[2] sm:h-full '>
              <div className=" absolute w-[80%] sm:w-[100%] top-[-38%] sm:top-[-35%] right-[50%] translate-x-[50%]  sm:right-[-16%] sm:translate-x-[0%] z-20"><img className='w-full' src={phoneImage} alt="" srcset="" /></div> 
              <div className=" hidden sm:block absolute  top-[-35%]  sm:right-[-10%] z-10"><img className='' src={desktopBg} alt="" srcset="" /></div> 
              <div className=" sm:hidden block absolute  top-[-30%]  right-[0%] z-10"><img className='' src={mobileBg} alt="" srcset="" /></div> 
          </div>
    </div>
  )
}

export default Header