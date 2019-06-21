import React, { useState, useEffect } from 'react';
import AppViews from '../components/AppViews/';
import Data from '../mockData';
import { getJSON } from '../Utils';
import constants from '../constants';
import { Loading } from '../Templates/';
import axios from 'axios';

const Main = () => {
    
    let [ view, setView] = useState('home');
    let [ params, setParams] = useState(null);
    let [ dataReady, setDataReady] = useState(true);
    let [ characterData, setCharacterData] = useState([]);
    let [ filmData, setFilmData] = useState([]);
    let [ characters, setcharacters] = useState([]);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        async function fetchData() {
          const result = await axios(
            constants.API_URL, {
                 cancelToken: source.token
             }
          );
          setcharacters(result.data);
        }
    
      fetchData();
      return () => {
          source.cancel('Effect cleared');
      }
    }, []);

    const switchView = view => setView(view);

    const displayDetails = params => {
        setView('details');
        setDataReady(false);
        setParams(params);
        getCharacterData(params.url)
    }
     
    const getCharacterData = url =>{
        getJSON(url)
          .then((data) =>{
            setCharacterData(data.data)
            getFilmData(data.data.films) 
          })
          .catch(function(e){
            console.log("There was an error", e)
          })
      }
    
    const getFilmData = films => {
        films && Promise.all(films.map(film => getJSON(film)))
        .then(data => {
            setFilmData(data);
            setDataReady(true);
        })
        .catch(e => console.log("There was an error", e))
    }

    return (
        <div data-testid="ProductFeedContainer" className="ProductFeedContainer">
          {characters.results && characters.results.length > 0 ? 
            <AppViews
                displayDetails={displayDetails}
                dataReady={dataReady}
                switchView={switchView}
                characterData={characterData}
                filmData={filmData}
                view={view}
                params={params}
                data={characters.results || Data}
                getCharacterData={getCharacterData}
            /> : <Loading /> 
          }
        </div>
    );
}

export default Main;