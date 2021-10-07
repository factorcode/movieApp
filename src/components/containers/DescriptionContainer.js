import React, { useEffect, useState } from "react";
import { Box, Button, Center, Text, Image } from 'native-base'
import { getMovie } from '../services/api'
import { getTvShow } from '../services/api'
import { IMG_URL_BASE } from '../config/api_config'

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
                    console.log(apiData);
                },
                error => {
                    alert('Error', `Something went wrong! ${error}`)
                }
            )

    }, [requestParameters])

    return (
        <>
            {isLoading ? <Text>Loading...</Text>
                : <>
                    <Text>{requestParameters.name}</Text>
                    <Image source={apiData.poster_path ? {uri:`${IMG_URL_BASE}${apiData.poster_path}`} : {uri:``} } />
                    <Text>{apiData.overview}</Text>
                    <Text>Popularity: {apiData.popularity}</Text>
                    <Text>Release Date: {requestParameters.type == "movie" ? apiData.release_date : apiData.first_air_date}</Text>
                </>


            }
        </>

    )
}

export default DescriptionContainer;