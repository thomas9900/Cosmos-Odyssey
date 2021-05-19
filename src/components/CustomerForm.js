import React, {useState, useEffect} from 'react';
import Searchbar from './Searchbar';
import FlightCardList from './FlightCardList'

const CustomerForm = () => {
    const [state, setState] = useState({
        results: []
    });

    const onSearch = async (text) => {
        const dataResult = await fetch('https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices');
        const results = await dataResult.json();
        console.log(results)

        setState(prevState => {
            return { ...prevState, results: results }
        })
    };

    return (
        <div>
            <Searchbar onSearch={onSearch} />
            <FlightCardList results={state.results} />
        </div>
    );
}

export default CustomerForm;

// api = https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices

// https://my-flights-api.herokuapp.com/legs

