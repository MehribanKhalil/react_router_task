import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './index.scss'

const Dropdown = () => {
    return (
        <div>
            <ul className="dropdownList">
                <li className='dropdown_item'>
                    <NavLink  to='about/pageMarkup'>Page Markup</NavLink>
                </li>
                <li className='dropdown_item'>
                    <NavLink  to='about/contact'>Contact Form</NavLink>
                </li>
                <li className='dropdown_item'>
                    <NavLink to='about/imagesPage'>Page Images</NavLink>
                </li>
                <li className='dropdown_item'>
                    <NavLink  to='about/floatsPage'>Clearing Floats</NavLink>
                </li>
                <li >
                    <p>Comment options</p>
                </li>
                <li className='dropdown_item'>
                    <NavLink  to='about/comments'>Page with Comments</NavLink>
                </li>
                <li>
                <p>More options</p>
                </li>
                <li>
                <p className='disabled_item'>This item is disabled</p>
                </li>
            </ul>
        </div>
    )
}

export default Dropdown