"use client"
import React from 'react'
import {motion} from 'framer-motion'
import './Email.css'

const Email = () => {
  return(
    <div 
     initial={{
      width:".5rem",
      borderRadius:"100%",

    }}

    whileInView={{
      width:"50%",
      borderRadius:"999px",
      transition:{
        type:"ease-out",
        duration:"1",
      },
    }}
    className="email-box">
      <input type='email' placeholder='Enter email'/>

      <div className="getfunded">
        <button>Get Funded</button>
      </div>
    </div>
  )

}

export default Email