import React from "react";
import {IconBtn, Heading} from '../../Templates'
import AppHeader from '../AppHeader';
import './DetailView.scss'

const CharcterCard = ({characterData, filmData}) => {
    console.log({characterData})
    return(
        <div className="details-card-wrapper" tabIndex="1">
            <div className="details-card">
                <div className="img-wrapper">
                    <img className="details-pic" alt="star wars" tabIndex="1" src="https://www.urbanize.com.ph/6721-big_default_2x/popsockets-star-wars-logo.jpg" />
                </div>
                <div className="text-wrapper">
                    <div className="details-info" tabIndex="1">
                        <ul className="attributes">
                            <li>Gender:</li>
                            <li>Height:</li>
                            <li>Skin Color:</li>
                        </ul>
                        <ul className="values">
                            <li>{characterData.gender}</li>
                            <li>{characterData.height}</li>
                            <li>{characterData.skin_color}</li>
                        </ul>
                    </div>
                    <div className="status">
                        <h4 className="status-label">Appears in ...</h4>
                        <div className="status-text">
                            {filmData.length > 0 && filmData.map( (film, id) => {
                                return <span tabIndex="1" key={id}> {film.data.title} </span>
                            } )}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

const DetailView = props => {
    const backBtn = <IconBtn icon="arrow_back" handleClick={() => props.switchView("home")} />,
        heading = <Heading text={props.params.name} />;

    return (
        <div className="DetailView">
            {props.logo}
            <AppHeader backBtn={backBtn} heading={heading} />
            {props.content}
        </div>
    );
};

export { DetailView, CharcterCard };
