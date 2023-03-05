import React from 'react'
import "./Subheader.css"
import { useLocation } from 'react-router-dom'
import { BiMenu } from "react-icons/bi"

function Subheader() {

  const {pathname} = useLocation()
  if (pathname.includes("admin")) {
    return <></>
  }

  return (
    <div className='sub__header'>
        <div className="container">
          <div className="sub__container">
            <ul className='sub__menu'>
              <li className='menu_logo'><BiMenu className='sub_logo'/><h4>Barcha bo'limlar</h4></li>
              <li>Yangiliklar</li>
              <li>Yangi kelganlar</li>
              <li>Chegirmalar</li>
              <li>Kitoblar</li>
              <li>Telefonlar va gadjetlar</li>
              <li>Televizorlar</li>
              <li>Sport buyumlari</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Subheader