'use client'
import React, { useEffect, useState } from 'react'
import {
  AnimatePresence,
  Reorder,
  motion,
  useMotionValue,
  useSpring
} from 'framer-motion'
const texts = [
  'MStar',
  'Tech bootcamp #1',
  'Odmunkh',
  'Framer motion',
  'Tailwind CSS'
]
const rightMenu = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5']

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  const [activeTextIndex, setActiveTextIndex] = useState(0)
  useEffect(() => {
    const textInterval = setInterval(() => {
      const newIndex = (activeTextIndex + 1) % texts.length
      setActiveTextIndex(newIndex)
    }, 5000)

    return () => clearInterval(textInterval)
  }, [activeTextIndex])

  const textParentVariants = {
    initial: {},
    animate: {},
    exit: {}
  }
  const textChildrenVariants = {
    initial: {
      y: 30
    },
    animate: {
      y: 0
    },
    exit: {
      y: -30
    }
  }
  const splitParentVariants = {
    initial: {
      x: 0
    },
    hover: {
      x: 20,
      transition: {
        type: 'spring',
        staggerChildren: 0.1
      }
    }
  }
  const splitChildrenVariants = {
    initial: {
      x: 0
    },
    hover: {
      x: -20
    }
  }
  return (
    <div className='fixed top-0 flex w-screen px-10 h-20 bg-transparent justify-between mt-4 z-10'>
      <div className='text-black font-bold font-sans md:font-serif text-xl z-50'>
        <AnimatePresence>
          <motion.div
            className='flex whitespace-nowrap overflow-hidden absolute left-0'
            key={'parent' + activeTextIndex}
            variants={textParentVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.5,
              staggerChildren: 0.1,
              type: 'spring'
            }}
          >
            {texts[activeTextIndex].split('').map((eachAlphabet, index) => (
              <motion.span
                className='inline-flex'
                key={'children' + activeTextIndex + eachAlphabet + index}
                variants={textChildrenVariants}
              >
                {eachAlphabet}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        className='flex flex-col gap-2 size-10 z-50'
        onClick={() => setisMenuOpen((prev) => !prev)}
      >
        <motion.img
          src='/day5svg2.svg'
          className='w-8'
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 6.5 : 0 }}
        />
        <motion.img
          src='/day5svg2.svg'
          className='w-8'
          initial={{ rotate: 0, y: 5 }}
          animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? -6.5 : 0 }}
        />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='absolute inset-0 w-screen h-screen bg-menu bg-white z-40 flex flex-col p-4 gap-20 text-7xl *:border-b-2 *:border-black *:pb-5 *:mt-4'
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
          >
            {rightMenu.map((eachMenuTxt) => (
              <motion.div
                className='flex'
                variants={splitParentVariants}
                initial='initial'
                whileHover='hover'
              >
                {eachMenuTxt.split('').map((eachAlphabet: any) => (
                  <motion.span
                    variants={splitChildrenVariants}
                    className='text-4xl border-2 bg-gradient-to-r p-4 rounded-full'
                  >
                    {eachAlphabet}
                  </motion.span>
                ))}{' '}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar