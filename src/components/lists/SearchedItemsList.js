import { FlatList, Text, View } from 'native-base'
import React from 'react'
// import MovieCard from '../listItems/MovieCard'

const SearchedItemsList = ({ navigation, searchResults }) => {
  const data =  searchResults;

  return (
    <>
    {data ? 
      <FlatList
      data={data}
      renderItem={({ item }) => (
        <Text>
            {item.original_title ? item.original_title : item.original_name}
        </Text>
      )}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />      
      : <Text> Please instantiate search</Text>}
    </>
  )
}

export default SearchedItemsList
