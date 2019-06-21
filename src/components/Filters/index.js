import React from 'react';
import { SortBtn } from '../../Templates'
import './Filters.scss';

const Filter = (props) => {
    return(
        <div className="Filters">
            <div className="search-block">
                <input type="search" placeholder="Search" value={props.searchTerm} onChange={e => props.setsearchTerm(e.target.value)}/>
                <div className="icon"></div>
            </div>
            <div className="sortWrapper">
                <SortBtn handleClick={props.setSort} title="sort"/>
            </div>
        </div>
    )
}

export default Filter;