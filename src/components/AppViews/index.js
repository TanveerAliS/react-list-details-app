import React from "react";
import {ContentBlock} from '../../Templates';
import HomeView from '../HomeView/';
import { DetailView, CharcterCard }from '../DetailView/';
import './AppViews.scss'
import constants from '../../constants';

const AppViews = props => {
    const logo = (
        <div className="AppViews helper-full-width helper-centered">
            <img
            tabIndex="1"
            src={constants.LOGO}
            className="logo"
            alt="star wars"
            title="star wars"
            />
        </div>
        ),

    displayView = view => {
      const contentList = <CharcterCard {...props}/>,
        detailContent = (
          <ContentBlock contentReady={props.dataReady} content={contentList} />
        ),
        views = {
          home: <HomeView {...props} logo={logo} />,
          details: (
            <DetailView
              {...props}
              content={detailContent}
              logo={logo}
            />
          )
        };
      return views[view];
    };

  return displayView(props.view);
};

export default AppViews;