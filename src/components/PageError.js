import React from 'react'
import { NavLink } from 'react-router-dom'

function PageError () {
    return (
        <div className='center'>
            <h1>Error !!!</h1>
            <p>The page you're looking for is not found. Please verify you're logged in</p>
            <p className='center'>
                <NavLink className='link' to='/'>Pleas click here</NavLink> to go back to login page
            </p>
        </div>
    )
}

export default PageError