import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'

export default () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-info'>
        <div className='navbar-links'>
            <div className='navbar-brand'>Notebook</div>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/' exact>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/about' exact>About</NavLink>
                </li>
            </ul>
        </div>
        
        <Search />
    </nav>
)

