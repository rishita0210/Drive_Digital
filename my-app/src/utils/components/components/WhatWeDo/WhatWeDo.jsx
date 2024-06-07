import React from 'react'

import './WhatWeDo.css'
import { features } from '../data';
const Whatwedo = () => {
  return (
    <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">
                <div className="wwd-head">
                    <span className="tag-head">What We Do</span>
                    <span className="title">Empowering Founders With Non Dilutive </span>
                    <span className="title">Capital And Exectuion Expertise</span>
                    <span className="base-line">Here is how we can evaluate</span>
                </div>

                {/*left----part*/}
                <div className="full-container">
                <div className="wwd-blocks">
                    <div className="wwd-left-block">
                        <span className='tag-head-block'>Blue Advances</span>
                        <span className="title-block-1">Fund reccuring growth expenses e.g customer acquitision</span>
                        <span className="title-block">inventory</span>
                        <div className="block-features">
                            {
                                features.slice(0,3).map((feature,i)=>(
                                    <div className="block-feature" key={i}>
                                        <img
                                        src={feature.icon}
                                        alt="feature"
                                        width={60}
                                        height={60}
                                        />
                                        <span>{feature.title}</span>

                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    
                </div>
                <div className="wwd-blocks">
                <div className="wwd-left-block">
                        <span className='tag-head-block-right'>Blue seed</span>
                        <span className="title-block-1-right">Fund one-offs to scale e.g product, hiring</span>

                        <div className="block-features">
                            {
                                features.slice(3,6).map((feature,i)=>(
                                    <div className="block-feature" key={i}>
                                        <img
                                        src={feature.icon}
                                        alt="feature"
                                        width={60}
                                        height={60}
                                        />
                                        <span>{feature.title}</span>

                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </div>
                </div>
               
                <div className="wwd-support">
                    <div className="wwd-heading">
                    <h3>Blue Growth Support</h3>
                    
                    

                    </div>
                    
                    
                      
                    <div className="wwd-support-details">
                    <span className="wwd-support-title">Data Insights and Full stack expertise to super exchange growth</span>
                        <span> Promotion of brands to connect with potential customers using the internet  and other forms of digital communication.</span>
                        
                         <span>This includes not only email, social media, and web-based advertising,but also text and multimedia </span>
                         <span> messages as a marketing channel.</span>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    
  );
};
export default Whatwedo
