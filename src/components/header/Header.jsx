import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { BsChevronCompactLeft, BsChevronCompactRight, BsEmojiHeartEyesFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Session from '../session/Session'
import Portfolio from '../portfolio/Portfolio'
import Porthead from '../porthead/Porthead'
import Testimonie from '../testimonie/Testimonie'
import data from '../portfolio/data'

function Header() {

  const portfolio = data.map(item => {
    return (
        <Portfolio 
          key={item.id}
          img={item.image}
          text={item.text}
          url={item.url}
            
        />
      )
    }) 
    
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
    <div className='h-[780px] w-full'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

    <div>
      <div className='mt-24 flex flex-1 flex-row items-center justify-center'>
        <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-black font-bold mr-2'>HEY! I AM ADEYEMI MALIK </p>
        <BsEmojiHeartEyesFill className='text-4xl text-yellow-600' />
      </div>
      <div className='flex flex-1 flex-row items-center justify-center'>
        <p className='text-gray-500 text-sm'>Timeless | Boldness | Inspiring</p>
      </div>

      <div className='flex flex-1 flex-row items-center justify-center mt-10'>
        <p className='text-center xl:px-48 lg:px-32 md:px-24 sm:px-20 px-10
          flex flex-1 items-center justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, inventore velit nostrum ipsam facilis quidem deleniti maiores veritatis aperiam a Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, inventore velit nostrum ipsam facilis quidem deleniti maiores veritatis aperiam a Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, inventore velit nostrum ipsam facilis quidem deleniti maiores veritatis aperiam a.
        </p>
      </div>

      <div className='flex flex-1 flex-row items-center justify-center mt-6'>
        <Link to='/about'>
          <p className='border-2 rounded-md border-yellow-700 py-3 
            px-6 text-yellow-700 font-bold'>Read more
          </p>
        </Link>
      </div>
    </div>
          
          <Session />
          <Porthead />
          <section className='flex flex-1 flex-wrap gap-4 items-center justify-center'>
            {portfolio}
          </section>
          <Testimonie />

    <div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-y-10 lg:pl-20 lg:px-0 px-20 mt-12'>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <p className='font-bold text-2xl'>ABOUT ME</p>
                <p className='text-sm text-center lg:py-0 '>I am a South African based photographer specializing in weddings, events and portrait photography. I have over 8 years of experience, both internationally; UK, Nigeria and locally. Read more</p>
            </div>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <p className='font-bold text-2xl'>CONTACT ME</p>
                <ul className='text-sm text-center'>
                    <li>+27625844249</li>
                    <li><a href="">info@samekurephotography.com</a></li>
                    <li><a href="">+samuel.ekure@gmail.com</a></li>
                </ul>
            </div>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <p className='font-bold text-2xl'>IMPORTANT LINKS</p>
                <ul className='text-sm text-center'>
                    <li>Book session</li>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Testimonies</li>
                    
                
                    
                </ul>
            </div>
      </div>

      <footer className='border border-black bg-black mt-10'>
            <div className='flex flex-1 items-center justify-center  text-white py-4'>
                <p>Copyright © 2021, Sam Ekure Photography . Powered by TAB</p>
            </div>
      </footer>
    </div>
    </>
  );
}

export default Header;
