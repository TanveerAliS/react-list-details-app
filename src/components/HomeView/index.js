import React, { useState } from "react";
import {Heading} from '../../Templates'
import AppHeader from '../AppHeader/';
import ListView from '../ListView/';
import Filters from '../Filters/';
import { FilterContext } from '../../Utils';
import constants from '../../constants';

const HomeView = props => {
    const heading = <Heading text={constants.TITLE} />;
    const [searchTerm, setsearchTerm] = useState("");
    const [isSort, setSort] = useState(false);
    let characterCollection = props.data;
    const handleSort = (e) => {
        e.preventDefault();
        characterCollection = props.data.sort( (a, b) => {
            setSort(!isSort)
            return isSort ? a.name.toLowerCase().localeCompare(b.name.toLowerCase()) : b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        })
    }
    return (
        <div className="HomeView">
            <FilterContext.Provider value={[searchTerm, setsearchTerm]}>
                {props.logo}
                <AppHeader heading={heading} />
                <Filters 
                    searchTerm={searchTerm}
                    setsearchTerm={setsearchTerm}
                    setSort={handleSort}
                />
                <ListView
                    collection={characterCollection.filter(
                        charcter => charcter.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )}
                    titleField={"name"}
                    isLinkItem={true}
                    handleClick={ params => props.displayDetails(params)}
                />
            </FilterContext.Provider>
        </div>
    );
};

export default HomeView;