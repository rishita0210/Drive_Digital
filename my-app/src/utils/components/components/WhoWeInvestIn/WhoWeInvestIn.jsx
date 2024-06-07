import React from 'react'
import "./WhoWeInvestIn.css"
import { whoWeInvest } from '../data'
const WhoWeInvestIn = () => {
  return (
    <div className='wwi-wrapper'>
        <div className="container">
            <div className="wwi-container">
                {/*left side */}
                <div className="wwi-left">
                    <div className="head">
                        <span className='tag'>Who We Invest In</span>
                        <span className='title2'>Digital Buisness
                            <br />with early transection
                        </span>
                    </div>

                    <div className="wwi-features">
                        {
                            whoWeInvest.map((feature,i)=>(
                                <div className="wwi-feature" key={i}>
                                    <span className='des'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div className="wwi-right">
                    <img src="persons.png" alt="persons" className='img'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WhoWeInvestIn
