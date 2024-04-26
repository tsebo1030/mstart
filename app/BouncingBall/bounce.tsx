// 'use client'

// import { AnimatePresence, motion } from 'framer-motion'
// import { useEffect, useState } from 'react'
// import { }


// const Bounce = () => {
//     let canvas = document.querySelector("canvas");
 
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
 
// let l = canvas.getContext('2d');
 
// // x and y are the coordinates of the circle
// // vx and vy are the respective speeds
// let x = Math.floor(Math.random() * innerWidth);
// let y = Math.floor(Math.random() * innerHeight);
// let vx = Math.floor(Math.random() * 2);
// let vy = Math.floor(Math.random() * 4);
// let radius = 20;
 
// move();
// function move() {
//     requestAnimationFrame(move);
 
//     // It clears the specified pixels within
//     // the given rectangle
//     l.clearRect(0, 0, innerWidth, innerHeight);
 
//     // Creating a circle
//     l.beginPath();
//     l.strokeStyle = "black";
//     l.arc(x, y, radius, 0, Math.PI * 2, false);
//     l.stroke();
 
//     // Conditions so that the ball bounces
//     // from the edges
//     if (radius + x > innerWidth)
//         vx = 0 - vx;
 
//     if (x - radius < 0)
//         vx = 0 - vx;
 
//     if (y + radius > innerHeight)
//         vy = 0 - vy;
 
//     if (y - radius < 0)
//         vy = 0 - vy;
 
//     x = x + vx;
//     y = y + vy;
 
// }
// }

// export default Bounce