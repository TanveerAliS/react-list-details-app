import React from "react";
import {RightIcon} from '../../Templates'
import './ListView.scss';

const ListView = ({collection, titleField, handleClick }) => {
    const linkItem = item => {
            const params = {
                name: item.name,
                url: item.url
            };
            return <a href="#" onClick={() => handleClick(params)}>{item[titleField]} </a>
        };

    const displayList = collection.map((item, index) => {
        let heading = item[titleField];
        heading = linkItem(item);

        return (
            <li key={index} className="List helper-centered flex-row flex-centered flex-vertical-middle">
                <div className="flex-main-content">
                    <h2 className="list-item-header"><RightIcon/>{heading}</h2>
                </div>
            </li>
        );
    });

    return <ul className="listView">{displayList}</ul>;
};

export default ListView;

