import React from 'react'
import Logo from '../assets/logo.png'
const Header = (props) => {
    return (
        <>
        <div className="appHeader">
        <h4>{`Hello ${props.playerName}!`}</h4>
        <h1><img src={Logo} alt="UEFA 2020 LOGO"/></h1>
        <a className="logout-btn">logout</a>
        {/* <h5>This should disappear</h5> */}
        
        </div>
        </>

    )
}

export default Header
