import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'

const contacts = () => {
  const [formData, setFormData] = React.useState (
    {
      firstName: "",
      lastname: "",
      email: "",
      comments: "",
      isFiendly: true,
      employment: "",
      select: "",
      phone: "",
      date: "",
      aboutus: "",
      referral: "",

    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]:type === "checkbox" ? checked : value
      }
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='flex flex-1 flex-col items-center justify-center  text-center px-16'>
          <p className='text-yellow-700 font-bold lg:text-4xl text-3xl'>WE WOULD LOVE TO HEAR FROM YOU</p>
          <p>How would you like to be photograph?</p>
        </div>

        <div className='flex flex-1 flex-col items-center justify-center text-center px-16 mt-10'>
          <p className='text-yellow-700 lg:text-4xl text-3xl mb-8'>KINDLY FILL THE FORM BELOW TO HELP US SERVE YOU OR EMAIL US DIRECTLY</p>
          <div className='bg-yellow-700 p-4 rounded-full text-2xl text-white'>
            <HiOutlineMail />
          </div>
          <a href="" className='text-2xl italic'>info@examplephotography.com</a>
        </div>

      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col px-16 mb-8">
          <div className='flex flex-1 flex-col w-full gap-3'>
            <div className='flex flex-1 flex-col'>
              <p className='font-bold'>Full Name</p>
              <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className='p-2 border border-black w-full'
              />
            
              <p className='font-bold'>Email</p>
              <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className='p-2 border border-black w-full'
              />
            
              <p className='font-bold'>Phone</p>
              <input 
                type="text"
                placeholder="Phone No"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                className='p-2 border border-black w-full'
              />
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
              <div>
                <p className='font-bold'>Inquiry service Type</p>
                <select 
                  name="select" 
                  id="select"
                  value={formData.select}
                  onChange={handleChange}
                  className='p-2 border border-black w-full'
                >
                  <option value="select">Select service type</option>
                  <option value="portraits">Portraits</option>
                  <option value="motherhood">Motherhood</option>
                  <option value="family">Family</option>
                  <option value="wedding">Wedding</option>
                  <option value="branding">Personal Branding</option>

                    
                </select>
              </div>

              <div>
                <p className='font-bold'>How would you like us to contact you?</p>
                <select 
                  name="select" 
                  id="select"
                  value={formData.select}
                  onChange={handleChange}
                  className='p-2 border border-black w-full'
                >
                  <option value="select">Select option</option>
                  <option value="calls">Phone calls</option>
                  <option value="message">Text message</option>
                  <option value="email">Emails</option>
                 
                    
                </select>
              </div>

            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
              <div>
                <p className='font-bold text-xs'>When would you like to have you session?</p>
                <input 
                type="date" 
                name="date" 
                id="date"
                value={formData.date}
                onChange={handleChange}
                className='p-2 border border-black w-full' />
                
              </div>

              <div>
                <p className='font-bold text-xs'>How did you hear about us?</p>
                <input 
                  type="text"
                  onChange={handleChange}
                  name="aboutus"
                  value={formData.aboutus}
                  className='p-2 border border-black w-full'
                />
              </div>

              <div>
                <p className='font-bold text-xs'>Who can we thank for the referral?</p>
                <input 
                  type="text"
                  onChange={handleChange}
                  name="referral"
                  value={formData.referral}
                  className='p-2 border border-black w-full'
                />
              </div>

            </div>
            <div>
              <p className='font-bold text-xs'>Breif Description about what you want; to help us serve you better.</p>
              <textarea 
                name="comments"
                placeholder="Message"
                onChange={handleChange}
                value={formData.comments}
                className='p-2 border border-black w-full'>

                </textarea>
            </div>

            <div className='bg-blue-600 hover:bg-blue-700 rounded-lg'>
              <button className='text-xs font-bold py-4 w-full text-white'>SUBMIT FORM</button>
            </div>
          </div>
        

        
      </form>

        <footer className='border border-black bg-black mt-10'>
          <div className='flex flex-1 items-center justify-center  text-white py-4'>
            <p>Copyright © 2021, Sam Ekure Photography . Powered by TAB</p>
          </div>
        </footer>
    </>
    
  )
}

export default contacts