import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/dashboard' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/leaderboard' exact activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='nav-li' to='/add' exact activeClassName='active'>
                        Add a New Question
                    </NavLink>
                </li>
            </ul>        
        </nav>
    )
}