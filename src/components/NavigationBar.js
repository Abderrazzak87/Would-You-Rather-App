import React, { Component } from 'react'
import Nav from './Nav'
import Session from './Session'

class NavigationBar extends Component {

    render() {

        return (
            <div className='title-bar'>
                <Nav />
                <Session />
            </div>

        )
    }
}

export default NavigationBar