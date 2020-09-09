import React from 'react'
import clases from './Search.module.css'

const Search = () => {
    return (
        <div className={clases.content}>
            <div className={clases.search}>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}

export default Search;