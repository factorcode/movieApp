import React, { useEffect, useState } from "react";
import { Text, View, Image } from 'react-native';
import DropSelect from '../layout/DropSelect'
import { MovieListOptions } from '../config/dropdown_config';
import SearchedItemsList from '../lists/SearchedItemsList';
import { getMovie } from '../services/api'

const MoviesContainer = ({ navigation }) => {

    const [selectedListValue, setSelectedListValue] = useState("top_rated");
    const [apiData, SetApiData] = useState(null);

    setSelectedValue = (input) =>{
        setSelectedListValue(input);
    }

    useEffect(() => {
        if(selectedListValue != null)
            fetchMovies(selectedListValue)
    }, [selectedListValue])

    const fetchMovies = (type) => {
        
        getMovie(type).then(
            res => {
                SetApiData(res.results)
            },
            error => {
                alert('Error', `Something went wrong! ${error}`)
            }
        )
    }


    
    return (
        <>
            <DropSelect onchange={setSelectedValue} listItems={MovieListOptions} value={selectedListValue}/>
            {apiData ? <SearchedItemsList navigation={navigation} searchResults={apiData} /> : <Text>Loading...</Text>}
            
            
        </>
    )
}

export default MoviesContainer;
