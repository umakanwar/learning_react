import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
    const[formdata, setFormdata] = useState({
        first_name:"",
        last_name:"",
        email:"",
        message:"",
    })

    const Handlechange = (e) => {
        setFormdata({...formdata, [e.target.name]: e.target.value})
        }

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
        setFormdata({
            first_name:"",
            last_name:"",
            email:"",
            message:"",
        })
    }    
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#6A9C89] p-4">
    <div className="bg-[#D2E0FB] shadow-md shadow-[#181C14] rounded-sm p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>


      <form onSubmit={HandleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name='first_name'
            value={formdata.first_name}
            placeholder="First Name" 
            required
            onChange={Handlechange}
            className="w-1/2 px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-[#021526]"
          />
          <input
            type="text"
            name='last_name'
            onChange={Handlechange}
            value={formdata.last_name}
            placeholder="Last Name"
            required
            className="w-1/2 px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-[#021526]"
          />
        </div>
        <input
          type="email"
          name='email'
          onChange={Handlechange}
          value={formdata.email}
          placeholder="Email ID"
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-[#021526]"
        />
        <textarea
          placeholder="Your Message"
          name='message'
          onChange={Handlechange}
          value={formdata.message}
          rows="4"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#021526]"
        ></textarea>
        <div classname='flex justify-center items-center'>
        <button
          type="submit"
          className="w-[40%] bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 cursor-pointer transition duration-300"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ContactForm
