import React from 'react';
import {motion} from 'framer-motion';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import '../css/vision.css';

const visionVariants={
    hidden:{
        fontSize:'12px',
        y:'100vh',
    },
    visible:{
        fontSize:'40px',
        y:0,
        transition:{
            delay:0.5,
            duration:2,
            type:'spring',
            stiffness:120,
            mass:1.25,
        }
    }
}
const leftVariants={
    hidden:{

        x:'-100vw',
    },
    visible:{
        x:0,
        transition:{
            delay:2,
            duration:1,
            type:'spring',
        
        }
    }
}

const rightVariants={
    hidden:{
        x:'100vw',
    },
    visible:{
        x:0,
        transition:{
            delay:2,
            duration:1,
            type:'spring',
        }
    }
}
const staggerVariant={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            staggerChildren:1,
            type:'spring'
        }
    }
}
const fontStyles={
    color:"#05386B",
    fontWeight:"bold",
    fontSize:"1.5rem",
    fontFamily:"'Bree Serif', serif",
    margin:'0 15%',
    textALign:'center',
}
const Vision=()=>{
    return(
        <div className='Vision' style={fontStyles}>
            <motion.h2 
            style={{textAlign:'center'}}
            variants={visionVariants}
            initial="hidden"
            animate="visible"
            >
                Our Vision
            </motion.h2>
            <hr></hr>
            <p>We have build this site in order to provide brilliant minds across the globe to have a platform which can provide them materials according to there need</p>
            <motion.div
            variants={staggerVariant}
            initial="hidden"
            animate="visible"
            >
                <motion.div className="content"
                variants={leftVariants}
                >
                <img className='first' src={img1} alt="photo of Richard" width='60px'/>
                <p className='second'>It's time to become great with this site and you are oing to enjoy this a lot I can bet on this if you are unsure then message me at pradeep@gmail.com</p>
                </motion.div>
                
                <motion.div 
                className='content'
                variants={rightVariants}
                >
                <p className='first'>Now you have a great opprutunity</p>
                <img className='second' src={img2} alt='photo of Feynman' width='60px' />
                </motion.div>
                
                <motion.div 
                className='content'
                variants={leftVariants}
                >
                <img className='first' src={img3} alt='Photo of Einstien' width='60px'/>
                <p className='second'>Pack up your bag for the fun For the fun</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Vision