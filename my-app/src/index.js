'use client'
import Navbar from './utils/components/components/Navbar/Navbar';
import Hero from './utils/components/components/Hero/Hero';
import BrandingVideo from './utils/components/components/BrandingVideo/BrandingVideo';
import Whatwedo from './utils/components/components/WhatWeDo/WhatWeDo';
import OurDiff from './utils/components/components/OurDiff/OurDiff';
import WhoWeInvestIn from './utils/components/components/WhoWeInvestIn/WhoWeInvestIn';

import React from 'react';
import ReactDOM from 'react-dom';
import { motion, useAnimation } from 'framer-motion'; 
import './page.css'


const root = ReactDOM.createRoot(document.getElementById('root'));


const AppWithMotion = () => {
 
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <Whatwedo />

      <motion.div
        animate={controls}
        onViewportEnter={()=>controls.start({
          backgroundColor:"#00caf9",
      

      })}

      onViewportLeave={()=>controls.start({
          backgroundColor:"#533fd7",

      })}
      viewport={{amount:0.3}}
        
      >
        <OurDiff />
      </motion.div>
      <motion.div
             onViewportEnter={()=>controls.start({
                backgroundColor:"var(--primary-color)"
            

            })}

            onViewportLeave={()=>controls.start({
                backgroundColor:"var(--secondary-color)",

            })}
            viewport={{amount:0.3}}>
                <WhoWeInvestIn/>
            </motion.div>
    
    </motion.div>
  );
};

// Render the component with motion
root.render(<AppWithMotion />);



