import React from 'react'
import TrendCard from './TrendCard'
import './ContainerWW.css'

function ContainerWW() {
    return (

        // add a carousel
        // generate the position + description from a function/api call
        <div className='containerww'>
                <TrendCard position='1' description='Covid-19'/>
                <TrendCard position='2' description='Education'/>
                <TrendCard position='3' description='Washington'/>
                <TrendCard position='4' description='Olympic Games'/>
                <TrendCard position='5' description='Tour de France'/>
        </div>
    )
}

export default ContainerWW
