import React, { useState } from 'react'
import { Center, Container } from 'native-base'
import SearchForm from '../forms/SearchForm' //*
import Loading from '../layout/Loading' //*
import SearchedItemsList from '../lists/SearchedItemsList' //*
import { getSearchedItems } from '../services/api' //*


const SearchContainer = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [searchedItem, setSearchedItem] = useState(null)
    const [searchedType, setSearchedType] = useState("company")
    const [searchedItemResponse, setSearchedItemResponse] = useState(null)

    const fetchSearch = () => {
        setIsLoading(true)

        getSearchedItems(searchedItem, searchedType).then(
            res => {
                setSearchedItemResponse(res)
                setIsLoading(false)
            },
            error => {
                alert('Error', `Something went wrong! ${error}`)
            }
        )
    }

    const handleInputChange = (item, type) => {
        setSearchedItem(item)
        setSearchedType(type)
    }


    return (

            <Center px={4}>
                <SearchForm onInputChange={handleInputChange} fetchSearch={fetchSearch} />
                {isLoading ? <Loading />
                    : <SearchedItemsList navigation={navigation} searchResults={searchedItemResponse} />
                }
            </Center>

    )
}


export default SearchContainer