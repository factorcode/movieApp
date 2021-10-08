import { FlatList, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from "react-native";
import MovieCard from '../layout/MovieCard'

const SearchedItemsList = ({ navigation, searchResults }) => {
  const data = searchResults;

  return (
    <>
      {data ?
        <FlatList
          data={data}
          renderItem={({ item }) => (

            <MovieCard
              cardId={item.id}
              cardType={item.original_title ? 'movie' : 'tv'}
              title={item.original_title ? item.original_title : item.original_name}
              popularity={item.popularity}
              img={item.poster_path}
              releaseDate={item.original_title ? item.release_date : item.first_air_date}
              navigation={navigation}
            />

          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        : <Text style={StyleSheet.create({fontSize:20, paddingVertical:50})}> Please instantiate search</Text>}
    </>
  )
}

export default SearchedItemsList
