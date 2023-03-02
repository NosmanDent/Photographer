import React from 'react'
import {Link } from 'react-router-dom'


const Portfolio = (props) => {
  return (
    <div className='showcase__port ground'>
        <img src={`../../..//public/images/${props.img}`} className="img__port" alt='portfolio' />
        <div className='overlay__port flex flex-1 flex-col gap-y-2 items-center justify-center'>
            <p className='font-bold text-4xl'>{props.text}</p>
            <Link to={props.url}>
                <button className='border-2 border-white text-white py-2 px-6 text-xs font-bold'>Check more</button>
            </Link>
        </div>
        
    </div>
  )
}

export default Portfolio