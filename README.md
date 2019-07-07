
<p align="center">
  <h3 align="center">react-list-detail</h3>
</p>
  <p align="center">
    ReactJS application which contains a list and a detail view of the charcater from SWAPI.
    <br />
    </p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)

## About The Project

![Demo](https://github.com/TanveerAliS/react-list-details-app/blob/master/gifs/react-list-details-app.gif)

I have used [create-react-app](https://github.com/facebook/create-react-app) (react hooks) and [swapi](https://swapi.co/documentation) to develop this application. The purpose of the application is to correctly render the data from API as a list and also the details about the individual list item.

### Built With
This applicaiton has been devleoped with help of following stack
* [Font Awesome](https://fontawesome.com/)
* [Axios](https://github.com/axios/axios)
* [Node-sass](https://www.npmjs.com/package/node-sass)
* [React hooks](https://reactjs.org/docs/hooks-intro.html)

## Getting Started

In order to quick started with this application follow as below,

```sh
npx create-react-app my-app
cd my-app
npm start
```
Then open http://localhost:8000/ to see your app.

### Prerequisites

Required software and how to install.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/TanveerAliS/react-list-details-app.git
```
2. Go to dir and Install NPM packages then start
```sh
cd react-list-details-app
npm install
npm start
```
## Usage

```
├── .gitignore                      <- Files that should be ignored by git. 
├── README.md                       <- The top-level README for this project.
├── package.json                    <- This file contains all the devDependencies, dependencies and scripts to run app.
├── package-lock.json               <- It stores an exact, versioned dependency tree rather than using starred versioning like  package.json itself      
└── src
    ├── components                  <- Different componenent used for this app
    |   ├── AppHeader               
    |   |   ├── index.js            <- Appheader which consist of back button and heading
    |   |   ├── AppHeader.scss      <- Style for the AppHeader component
    |   |   └── AppHeader.test.js   <- TODO: Need to work on unit testing
    |   ├── AppViews                
    |   |   ├── index.js            <- Different view based on selection
    |   |   └── AppViews.scss       <- Style for the AppViews component
    |   ├── DetailsView             
    |   |   ├── index.js            <- Render the details about the character
    |   |   └── DetailsView.scss    <- Style for the DetailsView component
    |   ├── Filters               
    |   |   ├── index.js            <- Filters which consist search and sort option for list
    |   |   └── AppHeader.scss      <- Style for the DetailsView component
    |   ├── HomeView                
    |   |   ├── index.js            <- HomeView which will render heading along with list
    |   |   └── AppViews.scss       <- Style for the HomeView component
    |   └── ListView             
    |       ├── index.js            <- Render all the charcters based on API response
    |       └── DetailsView.scss    <- Style for the ListView component
    ├── container                   
    |   └── Main.js                 <- Fetching the data and passing data to component
    ├── mockData                    
    |   └── index.js                <- Mock data to implement the part1 
    ├── Templates                  
    |   └── index.js                <- Commonly used templates
    ├── App.js                      <- App component where we initializing the app
    ├── App.scss.js                 <- Required style for common elements
    ├── App.test.js                 <- TODO: Need to work on this
    ├── constant.js                 <- Defined the constants which are used in this app
    ├── index.js                    <- Init and place app in document
    └── Utils                       <- Util functions
```

In this application, we fetching the data from swapi (https://swapi.co/api/people/) to get the different characters and display the name in HomeView. 

In HomeView, user can able to search the specific character from the list and display on page and also user can toggle the sorting by name.

<p align="center">
  <img width="460" height="300" src="https://github.com/TanveerAliS/react-list-details-app/blob/master/gifs/searchAndSort.gif">
</p>
Once the user clicks on of character, it will fetch all data related to the character and also fetching all films in which he appeared for which we make use of Axios and promise all to fetch different endpoint. Once the promise is resolved will render the detailsView.

<p align="center">
  <img width="460" height="300" src="https://github.com/TanveerAliS/react-list-details-app/blob/master/gifs/listToDetails.gif" >
</p>
In detailsView, I have provided some simple animation for image and showing the films in which character appeared.
<p align="center">
  <img width="360" height="100" src="https://github.com/TanveerAliS/react-list-details-app/blob/master/gifs/animations.gif" >

  <img width="360" height="100" src="https://github.com/TanveerAliS/react-list-details-app/blob/master/gifs/animations2.gif" >
</p>
User can be able to come back from detailsView to HomeView(list page) by clicking back CTA.

It will render loading component while application fetching data from API.

This application is fully accessible with tabs and screen readers.

## ToDo

Do to low bandwidth and work in my currrent organization I coudnt able to cover testing for this application. I will work on this once I'm back from hometown.

## Contact

Your Name - [@TanveerAli_S](https://twitter.com/TanveerAli_S) - tanveeralims@gmail.com
