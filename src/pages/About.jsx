import React from 'react'
import { BsEmojiHeartEyesFill } from 'react-icons/bs'
import aboutimg from '.././assets/aboutimg.jpg'


const About = () => {
  return (
    <section className='bg-about'>
        <div className='pt-24 flex flex-1 flex-row items-center justify-center tracking-in-expand-fwd'>
            <p className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-black font-bold mr-2 '>HEY! I AM ADEYEMI MALIK </p>
            <BsEmojiHeartEyesFill className='text-4xl text-yellow-600' />
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 py-6  px-16 gap-4'>
            <div className=''>
                <img src={aboutimg} alt="img" className='' />
            </div>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <p className='md:text-2xl sm:text-xl text-yellow-700 font-bold'>TIMELESS|BOLD|INSPIRING</p>
                <p className='text-center text-gray-500 lg:text-base md:text-sm sm:text-xs text-xs '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consequatur 
                    modi harum architecto nulla, expedita numquam voluptatem dolorem. Provident 
                    itaque explicabo cupiditate delectus consectetur quaerat accusamus vero? Inventore 
                    delectus, error consectetur tempora fuga explicabo quae, temporibus 
                    id labore voluptates ad quam obcaecati illum aspernatur nemo debitis, 
                    nulla sapiente! Id esse perferendis aliquam cum ab quas recusandae nemo, nulla sunt
                     mollitia voluptas repellendus at ex rem deleniti dolore in aspernatur, doloremque, dicta 
                     officiis cumque ipsum non? Totam id impedit quaerat? Voluptatibus quo sit, et quaerat, animi 
                    reprehenderit asperiores ad pariatur, magni iusto beatae ea. Unde nulla dolore iure doloribus, rem quas.
                </p>
            </div>
        </div>

        <div>
            <div className='flex flex-1 items-center justify-center mt-6'>
                <p className='text-4xl text-black font-bold mb-2'>MY STORY</p>
            </div>

            <div className='flex flex-1 flex-row items-center justify-center lg:px-56 md:px-32 sm:px-20 px-10'>
                <p className='text-justify text-gray-500'>
                    I was born in Nigeria, raised in the UK, and now based in South Africa. A wedding clip sparked my interest in photography but the first time I ever picked a camera up was as a young man was for a church event, I was handed the camera and told to take pics. I did, they came out good, and just like that my journey as a photographer began. From there I took my interest to another level, fuelled with this NEW-FOUND love, I began to watch tutorials on anything about photography and attended workshops. In my journey, I’ve been able to work and assist photographers that I have admired. In 2014, I moved back to Nigeria and began shadowing a local wedding photographer, this is where I learned the fundamentals of wedding photography specifically, built up my experience, and fell more in love with photography. A year and some months later I moved to Johannesburg, South Africa, where I was fortunate to meet and work with various local photographers from different fields, each photographer I have encountered has had a significant influence on my journey as a photographer and also in business. I began to build genuine relationships and get personal gigs through my newfound connections. My work got a positive response and that’s when I decided to make a living out of photography. My first love was wedding photography and so that was what I specialized in initially, but I started getting calls for private functions, my first few clients started asking for services more specific to their needs, eg. family portraits, headshots, maternity, etc. My business started painting a clear picture of the need to diversify and I did. in doing so, I developed a huge interest in personal branding and headshots, this got me to study furthermore on posing, lighting, and general knowledge on portraits. I soon realized this was a niche market that I’d also like to cater to. Today Sam Ekure photography is known for diversity with excellence and authenticity within his community. Outside of photography, I constantly meditate on God’s word as He is the foundation of my life, my other interests are music, reading, and spending time with loved ones. If you feel a connection to my work and want an exclusive experience, beautifully crafted and high-end quality printed photos I would love to hear from you. 
                </p>
                
            </div>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 py-6  px-16 gap-4 mt-4'>
            
            <div className='flex flex-1 flex-col items-center justify-center'>
                <p className='md:text-2xl sm:text-xl text-yellow-700 font-bold mb-4'>OUR STUDIO</p>
                <p className='text-center text-gray-500 lg:text-base md:text-sm sm:text-xs text-xs '>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consequatur 
                    modi harum architecto nulla, expedita numquam voluptatem dolorem. Provident 
                    itaque explicabo cupiditate delectus consectetur quaerat accusamus vero? Inventore 
                    delectus,  animi 
                    reprehenderit asperiores ad re iure doloribus, rem quas.
                </p>
            </div>

            <div className=''>
                <img src={aboutimg} alt="img" className='' />
            </div>
        </div>

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
      

    </section>
  )
}

export default About