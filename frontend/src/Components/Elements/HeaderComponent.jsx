import React from 'react'
import Logo from "../../images/logo.png"
const HeaderComponent = () => {
  return (
    <div className='header-comp'>
      <div className='Brand'>
        <a href='#'><img src={Logo} alt="Logo" className='Logo' /></a>
      </div>
      <div className='user-data'>
        <p className='greet'>Hello</p>
        <p className='username'>Anand👋</p>
        <a href=''><i className='fa-solid fa-user Avatar'></i></a>
      </div>
    </div>
  )
}

export default HeaderComponent
