import React from 'react'
import './topBar.scss'
import { Mail, Person } from '@mui/icons-material'

function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Asndaniel.</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+44 211 23 11</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>asn@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hambuger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
