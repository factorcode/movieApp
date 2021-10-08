import React, { useEffect, useState } from "react";
import { Text, View, Image } from 'react-native';
import { StyleSheet } from "react-native";
import DropSelect from '../layout/DropSelect'
import { TVListOptions } from '../config/dropdown_config';
import SearchedItemsList from '../lists/SearchedItemsList';
import { getTvShow } from '../services/api'
import { Center } from "native-base";

const TVShowsContainer = ({ navigation }) => {

    const [selectedListValue, setSelectedListValue] = useState(null);
    // const [selectedListValue, setSelectedListValue] = useState("airing_today");
    const [apiData, SetApiData] = useState(null);

    setSelectedValue = (input) => {
        setSelectedListValue(input);
    }

    useEffect(() => {
        if (selectedListValue != null)
            fetchShows(selectedListValue)
    }, [selectedListValue])

    const fetchShows = (type) => {

        getTvShow(type).then(
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
            <Center px={4} style={tvContainerStyles.center}>
                <View style={tvContainerStyles.dropSelect}>
                    <DropSelect onchange={setSelectedValue} listItems={TVListOptions} value={selectedListValue} />
                </View>
                <View style={ tvContainerStyles.resultView}>
                    {apiData ?
                        <SearchedItemsList navigation={navigation} searchResults={apiData} />
                        : <Text style={tvContainerStyles.defaultText}>Please select option from dropdown</Text>}
                </View>

            </Center>
        </>
    )
}

const tvContainerStyles = StyleSheet.create({
    dropSelect: {
        marginVertical: 20,
    },
    defaultText: {
        alignSelf:'center',
        fontSize:18,
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

export default TVShowsContainer;
