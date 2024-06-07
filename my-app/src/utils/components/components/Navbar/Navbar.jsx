import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="container">
            <div className="n-container">
               {/*left-side*/}
               <div className="n-logo">
                   <span>Drive Digital</span>
               </div>

               {/* right-side*/}

               <div className="right-side">
                <span>What we do </span>
                <span>How it works</span>
                <span>Who we invest in</span>
                <span>Testimonals</span>

                <button>Get Funded</button>

               </div>
            </div>
        </div>
     
    </div>
  )
}

export default navbar