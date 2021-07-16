import React from 'react'
import './Home.css'
import ContainerWW from './ContainerWW'
import ContainerC from './ContainerC'

function Home() {
    return (
        <div className='home'>
                <div className='home__section__header'>
                    <h2>TRENDING WORLDWIDE</h2>
                </div>
                <ContainerWW />

                <div className='home__section__header'>
                    <h2>TRENDING BY COUNTRY</h2>
                </div>
                <ContainerC />   

            

        </div>
    )
}

export default Home
