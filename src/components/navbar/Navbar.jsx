import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { BsFillCartFill } from 'react-icons/bs' 
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiCloseLine } from 'react-icons/ri'
import { SlSocialFacebook } from 'react-icons/sl'
import { CiTwitter } from 'react-icons/ci'
import { AiOutlineInstagram } from 'react-icons/ai'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMunu ] = useState(false);
  return (
    
      <div className='md:flex flex-1 flex-row flex py-5 md:px-16 px-6 items-center'>
        <div className='flex flex-1 flex-row'>
          <div className='lg:w-40 w-20'>
            <Link to='/'>
              <img src={logo} alt="" className='' />
            </Link>
          </div>

          <div className='md:flex flex-1 flex-row items-center justify-end
            lg:space-x-6 md:space-x-4 lg:text-xs md:text-xs text-xs font-bold hidden'>
            <Link to='/'>
              <p  className=' hover:text-yellow-700 text-gray-600'>HOME</p>
            </Link>
              
            <Link to='/about'>
              <p  className=' hover:text-yellow-700 text-gray-600'>ABOUT</p>
            </Link>

            <Link to='/contacts'>
              <p  className=' hover:text-yellow-700 text-gray-600'>CONTACTS</p>
            </Link>

            <label className="dropdown">

                  <div className="dd-button hover:text-yellow-700 text-gray-600">
                    PORTFOLIO
                  </div>

                  <input type="checkbox" className="dd-input" id="test"></input>

                  <ul className="dd-menu">
                    <Link to='/portraits'><li className='hover:text-yellow-700 text-gray-600'>Portraits</li></Link>
                    <Link to='/wedding'><li className='hover:text-yellow-700 text-gray-600'>Wedding</li></Link>
                    <Link to='/ocassion'><li className='hover:text-yellow-700 text-gray-600'>Special Ocassion</li></Link>
                    <Link to='branding'><li className='hover:text-yellow-700 text-gray-600'>Personal Branding</li></Link>
                  </ul>

                </label>

                <label className="dropdown">

                  <div className="dd-button hover:text-yellow-700 text-gray-600">
                    MENU
                  </div>

                  <input type="checkbox" className="dd-input" id="test"></input>

                  <ul className="dd-menu">
                    <li className='hover:text-yellow-700 text-gray-600'>Fag</li>
                    <li className='hover:text-yellow-700 text-gray-600'>Testimonals</li>
                    <li className='hover:text-yellow-700 text-gray-600'>Something else here</li>
                    
                  </ul>

                </label>

                
          </div>
          
        </div>
        

        

        <div className='md:hidden flex items-center justify-end px-6 h-0'>

          {toggleMenu 
              ? <RiCloseLine color='#0e0e0e' size={27} onClick={() => setToggleMunu(false)}/>  
              : <BiDotsHorizontalRounded color='#0a0a0a' size={27} onClick={() => setToggleMunu(true)}/>  
                
          }
           
            

          {toggleMenu && (
            
              
            <div className="mte__navbar-menu_container bg-white border shadow-lg slide-in-top ">
              

              
                <div className='flex flex-col items-center justify-center gap-y-4 pb-16 px-16'>
                  <Link to='/'>
                  <p  className=' hover:text-yellow-700 text-gray-600'>HOME</p>
                  </Link>
              
                  <Link to='/about'>
                    <p  className=' hover:text-yellow-700 text-gray-600'>ABOUT</p>
                  </Link>

                  <Link to='/contacts'>
                    <p  className=' hover:text-yellow-700 text-gray-600'>CONTACTS</p>
                  </Link>

                  <label className="dropdown">

                        <div className="dd-button hover:text-yellow-700 text-gray-600">
                          PORTFOLIO
                        </div>

                        <input type="checkbox" className="dd-input" id="test"></input>

                        <ul className="dd-menu absolute">
                          <Link to='/portraits'><li className='hover:text-yellow-700 text-gray-600 mt-10'>Portraits</li></Link>
                          <Link to='/wedding'><li className='hover:text-yellow-700 text-gray-600'>Wedding</li></Link>
                          <Link to='/ocassion'><li className='hover:text-yellow-700 text-gray-600'>Special Ocassion</li></Link>
                          <Link to='branding'><li className='hover:text-yellow-700 text-gray-600'>Personal Branding</li></Link>
                        </ul>

                  </label>

                  <label className="dropdown">

                    <div className="dd-button hover:text-yellow-700 text-gray-600">
                      MENU
                    </div>

                    <input type="checkbox" className="dd-input" id="test"></input>

                    <ul className="dd-menu">
                      <li className='hover:text-yellow-700 text-gray-600'>Fag</li>
                      <li className='hover:text-yellow-700 text-gray-600'>Testimonals</li>
                      <li className='hover:text-yellow-700 text-gray-600'>Something else here</li>
                      
                    </ul>

                  </label>
                  
                
                </div>
              

              

              <div className='flex flex-row gap-2'>
                <div className='border rounded-lg bg-blue-700 p-2 text-white'>
                  <a href=""><SlSocialFacebook /></a>
                </div>

                <div className='border rounded-lg bg-red-600 p-2 text-white'>
                  <a href=""><AiOutlineInstagram /></a>
                </div>

                <div className='border rounded-lg bg-blue-500 p-2 text-white'>
                  <a href=""><CiTwitter /></a>
                </div>

                
              </div>

              

                  
            </div>
          )}
        </div>


      </div>
    
  )
}

export default Navbar