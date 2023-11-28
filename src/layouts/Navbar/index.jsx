import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import './index.scss'
import Dropdown from '../../components/Dropdown';
const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const handleClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    return (
        <div className='navSection'>
            <div className='container'>

                <div className='nav_content'>
                    <div className="nav_left">
                        <h3>
                            <NavLink to="/">
                                Dazzling Demo
                            </NavLink>
                        </h3>
                    </div>
                    <div className="nav_right">
                        <ul>
                            <li>
                                <NavLink className='nav_item' to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='nav_item' to='/gallery'>Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink className='nav_item' to='/shortcodes'>Shortcodes</NavLink>
                            </li>
                            <li onClick={handleClick}>
                                About
                                {
                                    isDropdownOpen ? <Dropdown /> : ''
                                }
                            </li>
                            <li>
                                <NavLink className='nav_item' to='/languages'>Languages</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar