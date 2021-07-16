
import React from 'react';
import './ArticleCard.css';

function ArticleCard({
    id, 
    img,
    title,
    description,
    rate,
    date,
    source,
    link,
}) {
    return (
        <div className='articleCard'>
            <img src={img} alt="" />

            <div className='articleCard__info'>
                <div className="articleCard__infoTop">
                    
                    <h3>{title}</h3>
                    <p>{description}</p>
                    
                </div>

                <div className="articleCard__infoBottom">
                    <div className="articleCard__date">
                    <p>{date}</p>
                    </div>
                    <div className='articleCard__source'>
                        <a
                        href={link}
                        className="source_link"
                        // onMouseEnter={() => this.setState({ showSomething: true })}
                        >
                        {source}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard