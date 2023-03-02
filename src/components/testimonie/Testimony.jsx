import React, {useState} from 'react'
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Testimony = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const checkNumber = (number) => {
      if (number > people.length - 1) {
        return 0;
      }
      if (number < 0) {
        return people.length - 1;
      }
      return number;
    };
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    };
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };
    
  
    return (
        <article className='mt-6 flex flex-1 flex-col items-center justify-center bg-black py-12'>
            <div className='flex flex-1 lg:flex-row flex-col items-center justify-center gap-4 px-16 mb-6'>
                <div className=''>
                    <img src={image} alt={name} className='img__size flex flex-1' />
                    
                </div>
                <div className=' flex flex-1 flex-col items-center justify-center text-center'>
                    <span className='text-4xl text-yellow-700'>
                        <FaQuoteRight />
                    </span>
                    <h4 className='capitalize font-bold'>{name}</h4>
                    <p className='text-yellow-700 capitalize'>{job}</p>
                    <p className='text-xs text-gray-600'>{text}</p>
                </div>

            </div>
            
            <div className='flex flex-1 flex-row items-center justify-between text-3xl'>
                <button className='text-yellow-700 ' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='text-yellow-700 ' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            
        </article>
    );
  };
  
  export default Testimony;