"use client"
import React, { startTransition } from "react"
import { AnimatePresence, animate, motion, stagger ,useAnimate,useMotionValue ,useSpring} from 'framer-motion'
import { transcode } from "buffer"


function App() {
const [scope , animate] = useAnimate();
const servicesVar = {
    initial: {
        x : -1000
    },
    animate :{
        x : 0
    }
}

const parentVariants = {
    initial: {
        x : -1000
    },
    animate :{
        x : 0
    }
}
const hidder = (a1 : number ) => {
    const names = [0 ,0 ,0 ,0];
    names[a1] = 1;
    return names;
}
  return (
    // <div className="from-blue-500 to-blue-700 bg-gradient-to-r w-2/3 h-60  rounded-xl my-20 mx-10 px-5 py-3 ring-[20px] flex justify-center items-center text-center text-white">
    <motion.div className="w-screen h-screen bg-black grid grid-cols-2" ref= {scope}>
        <div>
            <motion.span className="text-white text-3xl font-semibold p-20" variants={servicesVar} 
            initial = {{
                x : -1000
            }}
            animate ={{
                x : 0
            }}
            whileInView={{}}>Our services:</motion.span>
           
            <motion.div
            className="flex flex-col p-20 max-h-screen"
            variants={parentVariants}
            initial = 'initial'
            whileInView = 'animate'
            transition={ {
                staggerChildren : 1,
                delay : 0.5,
                when : "beforeChildren"
            }}>
                <motion.button className="text-white text-3xl font-semibold hover:underline hover:scale-115" 
                    variants={ servicesVar} 
                    onClick= {()=> {
                        animate("#image-1",{
                            opacity: 1,
                            x : 0 }),
                        animate("#image-2",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-3",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-4",{
                            opacity: 0,
                            x : 1000  })
                    }
                    }>1. BLABLA</motion.button>
                <motion.button className="text-white text-3xl font-semibold hover:underline hover:scale-115" 
                    variants={ servicesVar} 
                    onClick= {()=>{
                        animate("#image-1",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-2",{
                            opacity: 1,
                            x : 0  }),
                        animate("#image-3",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-4",{
                            opacity: 0,
                            x : 1000  })
                    }
                    }>2. BLABLA</motion.button>
                <motion.button className="text-white text-3xl font-semibold hover:underline hover:scale-115" 
                    variants={ servicesVar}
                    onClick= {()=> {
                        animate("#image-1",{
                            opacity: 0,
                            x : 1000 }),
                        animate("#image-2",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-3",{
                            opacity: 1,
                            x : 0  }),
                        animate("#image-4",{
                            opacity: 0,
                            x : 1000  })
                    }}>3. BLABLA</motion.button>
                <motion.button className="text-white text-3xl font-semibold hover:underline hover:scale-115" 
                    variants={ servicesVar}
                    onClick= {()=>{
                        animate("#image-1",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-2",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-3",{
                            opacity: 0,
                            x : 1000  }),
                        animate("#image-4",{
                            opacity: 1,
                            x : 0  })
                    }}>4. BLABLA</motion.button>
            </motion.div>
            </div>
            <div className="flex flex-col max-h-screen relative">
                <motion.img id ="image-1" className="size-full absolute inset-0 opacity-0 translate-x-[100vw]" src ="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/439007869_751938747069642_6573661404727469830_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xa5_sHGXWvEAb6YUpFT&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAean6yxSOeO9ezuFLiexNiHjKEswx2_FbDp5iz9uk_ig&oe=662CA1E8"/>
                <motion.img id ="image-2" className="size-full absolute inset-0 opacity-0 translate-x-[100vw]" src ="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/438037219_751262297137287_5008828732657572349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OHtRwX63q18Ab6yxbAw&_nc_ht=scontent.fuln1-1.fna&oh=00_AfClrlVALSzWoL6gSdmfprav1QfNtRElc647xGwp6wTI4A&oe=662CB23A"/>
                <motion.img id ="image-3" className="size-full absolute inset-0 opacity-0 translate-x-[100vw]" src ="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/439007869_751938747069642_6573661404727469830_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xa5_sHGXWvEAb6YUpFT&_nc_ht=scontent.fuln1-1.fna&oh=00_AfAean6yxSOeO9ezuFLiexNiHjKEswx2_FbDp5iz9uk_ig&oe=662CA1E8"/>
                <motion.img id ="image-4" className="size-full absolute inset-0 opacity-0 translate-x-[100vw]" src ="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/438037219_751262297137287_5008828732657572349_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OHtRwX63q18Ab6yxbAw&_nc_ht=scontent.fuln1-1.fna&oh=00_AfClrlVALSzWoL6gSdmfprav1QfNtRElc647xGwp6wTI4A&oe=662CB23A"/>
            </div>
    </motion.div>
  )
}

export default App
