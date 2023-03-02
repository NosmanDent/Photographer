import React from 'react'
import { Link } from 'react-router-dom'
import overlay from '../../assets/overlay.jpg'
import './session.css'

const Session = () => {
  return (
    <>
      <section className="showcase mt-10">
        <img src={overlay} alt="" />
        <div className='overlay flex flex-1 flex-col text-center items-center justify-center py-64'>
          <h2 data-text="Creative.......">Creative.......</h2>
          <p className='font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center'>“CAPTURE THE MOMENT, TELL THE STORY”</p>

          <Link to='/contacts'>
            <button className='border-2 border-white py-4 px-10 text-xs 
            font-bold mt-6 tracking-wide bg__session'>BOOK A SESSION WITH US</button>
          </Link>
      </div>
      </section>

    </>
  )
}

export default Session