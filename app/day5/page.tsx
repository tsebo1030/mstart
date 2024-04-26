"use client"
import React, { startTransition, useEffect, useState } from "react"
import { AnimatePresence, Reorder, animate, motion, stagger ,useAnimate,useMotionValue ,useSpring } from 'framer-motion'
import { transcode } from "buffer"


function App() {
    

  const [items, setItems] = useState([
    'MStars',
    'Academy',
    'Selbe',
    'DDish',
    'Unitel'])
 
   return (
    // <div className="from-blue-500 to-blue-700 bg-gradient-to-r w-2/3 h-60  rounded-xl my-20 mx-10 px-5 py-3 ring-[20px] flex justify-center items-center text-center text-white">
    <motion.div className="w-screen h-full my-20 flex flex-col items-center gap-10">
        {/* <Reorder.Group values = {items} onReorder={setItems} axis = 'y'>
            {
                items.map(item => (
                    <Reorder.Item value = {item} key = {item} 
                    className="cursor-grab active:cursor-grabbing">
                        {item}
                    </Reorder.Item>
            ))
            }
        </Reorder.Group> */}

        {items.map((item, index) => {
            return (
                <EachBox key={item} item={item} />
        )
        })
        }
    </motion.div>
  )
}
const EachBox = ({item} : {item: any}) => {
    const BoxOpacity = useMotionValue(0.5)
    const xReal = useMotionValue(0);
    const yReal = useMotionValue(0);
    const xNow = useMotionValue(0);
    const yNow = useMotionValue(0);
    const xSpring = useSpring(0);
    const splitParenVariants = {
        initial : {
            x : 0 
        },
        hover : {
            x : 20,
            transition :{
                type: 'spring',
                staggerChildren : 0.1
            }
        }
    }
    const splitchildrenVariants = {
        initial : {
            x : 0 
        },
        hover : {
            x : -20
        }
    }
     const ySpring = useSpring (0)
          const opacity = useMotionValue(0)
          const handleMouseMove = (e: any) => {  
              const boxEvent = e.currentTarget!.getBoundingClientRect()
              const mouseY = e.clientY
              const mouseX = e.clientX
              const mouseYonBox = mouseY - boxEvent.top
              const mouseXonBox = mouseX - boxEvent.left
      
              const x = (mouseXonBox  - boxEvent.width/2) > 0 ? 20 : -20
              const y = (mouseYonBox  - boxEvent.height/2) > 0 ? 20 : -20
              
              xSpring.set(x)
              ySpring.set(y)
              xNow.set(mouseXonBox)
              yNow.set(mouseYonBox)
         } 
          return (
              <motion.span 
        
              key= {item} 
              className="h-48 text-5xl border border-black w-1/2 flex items-center justify-center shadow-xl bg-slate-100"
              style={
                  {
                  x : xSpring,
                  y : ySpring,
              }}
             
              onMouseMove={handleMouseMove}
              viewport={{
                  once : false
              }}>
                <motion.span className="flex"
                variants={splitParenVariants}
                initial = 'initial'
                whileHover = 'hover'
                >
                   {
                    item.split('').map((letter: any, i: number) => {
                        return (
                            <motion.span key={i} variants={splitchildrenVariants} drag 
                            >{letter}</motion.span>
                        )
                    })
                   }
                </motion.span>
              </motion.span>
          )
      }
export default App
