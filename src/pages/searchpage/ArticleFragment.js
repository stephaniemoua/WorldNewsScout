import React from 'react'
import ArticleCard from './ArticleCard'

function ArticleFragment() {

    return (
                <React.Fragment>
                    <ArticleCard
                    id = "00001"
                    img="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A62/production/_115368367_vaccine2.jpg"
                    title="Covid vaccine update: Those that work - and the others on the way"
                    description="It is more than a year since the virus first emerged, yet many people are still vulnerable."
                    rating='positive'
                    date='July 7 2021'
                    source='BBC News'
                    link='https://bbc.com'
                    />
                    <ArticleCard
                    id = "00001"
                    img="https://images.wsj.net/im-368249?width=540&size=1.5"
                    title="U.S. Covid-19 Case Counts Have Doubled in Recent Weeks"
                    description="Public health officials, epidemiologists say rise is being driven by Delta variant, summer socializing and younger, unvaccinated people"
                    rating='neutral'
                    date='July 10 2021'
                    source='Wall Street Journal'
                    link='https://www.wsj.com/articles/u-s-covid-19-case-counts-have-doubled-in-recent-weeks-11626198501'
                    />
                </React.Fragment>
    )
}

export default ArticleFragment
