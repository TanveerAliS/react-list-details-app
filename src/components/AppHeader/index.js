import React from "react";
import './AppHeader.scss';

const AppHeader = props => (
    <div tabIndex="1" className="AppHeader flex-row flex-centered flex-vertical-middle color-inverted">
        {props.backBtn}
        {props.heading}
    </div>
);

export default AppHeader;
