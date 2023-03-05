import React from 'react'
import "./Skrol.css"
import {useLocation} from "react-router-dom"
function Skrol() {
    const {pathname} = useLocation()
    if(pathname.includes("admin")){
      return <></>
    } 
    const SrolMap = [
        {
            img:"https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand//63b65df2b0896.png"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//6103c3977d54d.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//603481675b122.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//605036814c07e.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//6067393b94990.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp"
        },
        {
            img: "https://assets.asaxiy.uz/brand//630b0f0ed1e2b.png"
        },
        {
            img: "https://assets.asaxiy.uz/brand//6309b524cec23.png"
        },
   
    ]
  return (
    <div className="container">
        <div className='skrols'>
           {
          SrolMap?.map((el, inx)=> <div key={inx} className="skrol">
            <div className="img__part"><img src={el?.img} alt="" /></div>
          </div>
          )
          }
    </div>
    </div>
    
  )
}

export default Skrol