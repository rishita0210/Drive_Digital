"use client"
import React  from 'react';
import { HeroData } from '../data';
import Email from '../Email/Email'
import {motion} from 'framer-motion';
import './Hero.css'
const Hero = () => {
  const variants = (delay)=>({
    initial : {
      y:"18rem",

    },
    animate: {
      y:"0rem",
      transition:{
        type:"spring",
        damping:"25",
        duration:"2.5",
        delay,

      }

    },
})
  return (
    <div className='h-wrapper'>
        <div className="container">
            <div className='h-container'>
              {/*left-side*/}
                <div className="h-left">
                  <div className="img-row">
                    {
                      HeroData.slice(0,3).map((person,i) => ((
                        <div className='person-pill' key={i}>
                        <motion.div
                        initial={"initial"}
                        animate={"animate"}
                        variants={variants(person.delay)}
                        style={{backgroundColor :person.bg}}
                         className="person-pill-bg">
                        <motion.img src={person.src} alt={person.src}  />
                        </motion.div>
                        </div>
                          
                        
                      

                      )))
                    }
                      
                    

                  </div>


                  <div className="img-row">
                    {
                      HeroData.slice(3,6).map((person,i) => ((
                        <div className='person-pill' key={i}>
                        <motion.div
                        initial={"initial"}
                        animate={"animate"}
                        variants={variants(person.delay)}
                        style={{backgroundColor :person.bg}}
                         className="person-pill-bg">
                        <motion.img src={person.src} alt={person.src}  />
                        </motion.div>
                        </div>
                          
                        
                      

                      )))
                    }
                      
                    

                  </div>

                  
            </div>


           </div>
              {/*right-side*/}
              < div className="h-right-side">
              <motion.div 
              variants={"containerVariants"}
              className="h-title">
               
               <h1>REDEFINE HOW </h1>
               <h1>YOU GROW YOUR </h1>
               <h1>DIGITAL BUISNESS</h1>
             </motion.div>

             <motion.div className="h-subtitle">
                <h4>Revenue based funding and execution support designed <br></br> for early stage founders</h4>
                
             </motion.div>
            <Email/>
             
            </div>

           
              
            
                
                
               
             
               
           


            </div>

        </div>
      
    
  );
}

export default Hero
