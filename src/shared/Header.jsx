import React, { useState } from 'react'
import('./style/Header.css')
import("./style/Footer.css")

const Header = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <header className='cabecera'>
            <h2 className='cabecera-h1'>THIS INTERIOR</h2>
            <button onClick={handleMenu} className='cabecera-button'>
                <i className={`bx ${menu ? "bx-x" : "bx-menu"}  cabecera-menu`}></i>
            </button>
            <nav className={`cabecera-nav ${menu ? "isActive" : ''} `}>
                <ul className='cabecera-ul'>
                    <li className='cabecera-li'>Home</li>
                    <li className='cabecera-li'>Collection</li>
                    <li className='cabecera-li'>About</li>
                    <li className='cabecera-li'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header