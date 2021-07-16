import React from 'react'
import './Banner.css'
import DateTime from './DateTime'

function Banner() {
    
    return (
        <div className='banner'>
            <p className='date-time'>
                <DateTime></DateTime>
            </p>
            <a className='about-link' href='.'>About</a>
        </div>
    )
}

export default Banner