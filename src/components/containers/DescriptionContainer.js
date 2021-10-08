import React, { useEffect, useState } from "react";
import { Box, Button, Center, VStack, Image } from 'native-base'
import { Text, View, } from 'react-native';
import { getMovie } from '../services/api'
import { getTvShow } from '../services/api'
import { IMG_URL_BASE } from '../config/api_config'
import { StyleSheet } from "react-native";

const DescriptionContainer = ({ requestParameters }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [apiData, SetApiData] = useState(null);


    useEffect(() => {
        setIsLoading(true)

        requestParameters.type == "movie" ?
            getMovie(requestParameters.id).then(
                res => {
                    SetApiData(res)
                    setIsLoading(false)
                    console.log(apiData);
                },
                error => {
                    alert('Error', `Something went wrong! ${error}`)
                }
            )
            : getTvShow(requestParameters.id).then(
                res => {
                    SetApiData(res)
                    setIsLoading(false)
                    console.log(`Imageurl:${IMG_URL_BASE}${apiData.poster_path}`);
                },
                error => {
                    alert('Error', `Something went wrong! ${error}`)
                }
            )

    }, [requestParameters])

    return (

        <Center px={4}>

            {isLoading ? <Text>Loading...</Text>
                : <>
                    <VStack my={10} space={5}>
                        <Text style={detailsStyles.heading}>{requestParameters.name}</Text>
                        <View style={detailsStyles.imageBox}>
                            <Image size={'2xl'} source={apiData.poster_path ? { uri: `${IMG_URL_BASE}${apiData.poster_path}` } : { uri: `` }} />
                        </View>
                        <VStack space={5}>
                            <Text style={detailsStyles.overview}>{apiData.overview}</Text>
                            <Text style={detailsStyles.meta}>Popularity: {apiData.popularity} | Release Date: {requestParameters.type == "movie" ? apiData.release_date : apiData.first_air_date}</Text>
                        </VStack>
                    </VStack>
                </>
            }
        </Center>
    )
}

const detailsStyles = StyleSheet.create({
    heading: {
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color:'#2c3e50',
    },
    imageBox: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },
    overview:{
        paddingHorizontal:20,
        lineHeight:20,
        fontSize:16,        
        textAlign:'justify'
    },
    meta:{
        paddingHorizontal:20,
        fontWeight:'bold'
    }
});

export default DescriptionContainer;