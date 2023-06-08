import React , {useState} from 'react';
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import InviteBtn from './InviteBtn';

function Navbar() {
    const [click, setClick] = useState(false)
  return (
      <div className='flex sm:w-[80%] mx-auto justify-between items-center w-full h-[12vh] px-4 sm:px-0'>
          <div className="flex-1"><img src={logo} alt="" srcset="" /></div>
          <div className={`sm:inline-block sm:bg-transparent sm:flex-[2] h-full sm:static absolute bg-grayishBlue top-[12vh] left-0 right-0 ${click? '' : 'hidden'}`} >
              <ul className='flex sm:flex-row sm:justify-around  sm:h-full sm:items-center bg-white sm:w-[auto] sm:rounded-none sm:mt-[auto] sm-py-0 rounded-lg  w-[90%] mx-auto mt-[5%] py-4 items-center flex-col'>
                  <li className='sm:mt-0 mt-4 cursor-pointer text-grayishBlue'>Home</li>
                  <li className='sm:mt-0 mt-4 cursor-pointer text-grayishBlue'>About</li> 
                  <li className='sm:mt-0 mt-4 cursor-pointer text-grayishBlue'>Contact</li>
                  <li className='sm:mt-0 mt-4 cursor-pointer text-grayishBlue'>Blog</li>
                  <li className='sm:mt-0 mt-4 cursor-pointer text-grayishBlue'>Careers</li>
              </ul>
          </div>
          <div className='flex-1 sm:flex sm:justify-end hidden' >
              <InviteBtn />
          </div>
          <div className=" sm:hidden" onClick={()=>{ setClick(!click)}} >
              <img src={click? close : menu} alt="" srcset="" />
          </div>
          
    </div>
  )
}

export default Navbar