import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="navbar">
            <div><h1>The Book Train</h1></div>
            <div className='book'><Link to="/bookmarks"><h3>Bookmarks</h3></Link>
                <i class="uil uil-bookmark-full"></i>
            </div>
        </div>
    </>
  )
}

export default Navbar
