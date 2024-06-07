import './OurDiff.css'
import { ourDiffFeatures } from '../data'
import {motion} from 'framer-motion'
import {titleVariants} from '../../animation'
import {tagVariants } from '../../animation'
import {desVariants } from '../../animation'

const OurDiff = () => {
    
  return (
    <div classname="header">
      <div className="header-wrapper">
      <div className="header-content">
        <div className="intro">
          <motion.span 
          variant={tagVariants}
          initial="offscreen"
          whileInView={"onscreen"}
          className='heading'>
            Our Difference
            </motion.span>
          <motion.span 
          variant={titleVariants}
          initial="offscreen"
          whileInView={"onscreen"}
          className='subheading'>Fair Cpaital ,Hastel Free</motion.span>
          <motion.span
          variant={desVariants}
          initial="offscreen"
          whileInView={"onscreen"}
           className='para'> Our mission is to level the playing field for early stage growth capital.
            <br /> We provide capital this is unbiased ,flexible and non dilutive with the execution support to <br />
            accelerate value creation.</motion.span>
        </div>

        <div className="od-feature">
           {  
           ourDiffFeatures.map((feature,i) =>(
            <div key={i}>
            {/* <img
            src={feature.icon}
            alt='feature'
            width={128}
            height={128}

            /> */}
            <span className='title' >{feature.title }</span>
            <span className='text'>{feature.des}</span>
            </div>

           )) 
                
          }
        </div>

      </div>

      </div>
     
        
      
     

      

        
        
       
      
    </div>
  )
}

export default OurDiff