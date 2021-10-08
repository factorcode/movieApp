import React, { useEffect, useState } from "react";
import { Text, View, Image } from 'react-native';
import { StyleSheet } from "react-native";
import DropSelect from '../layout/DropSelect'
import { MovieListOptions } from '../config/dropdown_config';
import SearchedItemsList from '../lists/SearchedItemsList';
import { getMovie } from '../services/api'
import { Center } from "native-base";

const MoviesContainer = ({ navigation }) => {

    const [selectedListValue, setSelectedListValue] = useState(null);
    // const [selectedListValue, setSelectedListValue] = useState("top_rated");
    const [apiData, SetApiData] = useState(null);

    setSelectedValue = (input) => {
        setSelectedListValue(input);
    }

    useEffect(() => {
        if (selectedListValue != null)
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
            <Center px={4} style={movieContainerStyles.center}>
                <View style={movieContainerStyles.dropSelect}>
                    <DropSelect onchange={setSelectedValue} listItems={MovieListOptions} value={selectedListValue} />
                </View>
                <View style={ movieContainerStyles.resultView}>
                    {apiData ?
                        <SearchedItemsList navigation={navigation} searchResults={apiData} />
                        : <Text style={movieContainerStyles.defaultText}>Please select option from dropdown above</Text>}
                </View>

            </Center>
        </>
    )
}

const movieContainerStyles = StyleSheet.create({
    dropSelect: {
        marginVertical: 20,
    },
    defaultText: {
        fontWeight: 'bold',
        alignSelf:'center',
        fontSize:15,
        paddingBottom:200       
    },
    center: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    resultView :{
        alignSelf:'stretch', 
        flexGrow:1,
        justifyContent:'center'
        
    }
})

export default MoviesContainer;
