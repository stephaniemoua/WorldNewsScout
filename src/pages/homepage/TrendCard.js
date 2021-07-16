import React from 'react'
import './TrendCard.css'

/* this should take 2 props as parameters: 
- for the # 
- for the topic generated 

we can add a default props to make sure it populates*/
function TrendCard({position, description}) {
    return (
        <div className='trend-card'>
            <div className='number'><p>#{position}</p></div>
            <div className= 'text-area'>
            <div className='topic'><h4>{description}</h4></div>
            </div>
        </div>
    )
}

export default TrendCard
