import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHandPointRight, faSort} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowLeft);
library.add(faHandPointRight);
library.add(faSort);

const IconBtn = ({handleClick}) => (
    <button onClick={handleClick} className="icon-btn btn-dflt-size">
        <FontAwesomeIcon icon="arrow-left" className="icons"/>
    </button>
);

const SortBtn = ({handleClick, title}) => (
    <button onClick={handleClick} alt={title} className="icon-btn btn-dflt-size">
        <FontAwesomeIcon icon="sort" className="icons"/>
    </button>
)

const RightIcon = () => <FontAwesomeIcon icon="hand-point-right" className="icons"/>

const Heading = ({ level = "h1", text}) => React.createElement( level, { className: "helper-full-width helper-centered" }, text);

const Loading = () => (<div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
);

const ContentBlock = ({contentReady, content}) => contentReady ? content : <Loading />;

export { ContentBlock, Loading, Heading, IconBtn, RightIcon, SortBtn}
