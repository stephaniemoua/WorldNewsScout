import React from 'react'
import './SearchPage.css'
import ResultsTable from './ResultsTable'


function SearchPage({category, level, topic}) {

    return (
        <div className='searchPage'>
            <div className='searchPath'>
                <h3 className='path_cat'>{category} {level}:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <div className='path_topic'>'{topic}'</div>
            </div>

            <div className='resultsTable'>
                <ResultsTable />
            </div>
        </div>
    )
}

export default SearchPage
