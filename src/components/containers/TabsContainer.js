import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesContainer from './MoviesContainer'
import SearchContainer from './SearchContainer'
import TVShowsContainer from './TVShowsContainer'

const Tab = createMaterialTopTabNavigator();

const TabsContainer = (props)=>{

   return(
        <Tab.Navigator screenOptions={{
                tabBarLabelStyle: { textTransform: "none", fontSize: 14 },
                tabBarActiveTintColor: '#2c3e50',
                tabBarIndicatorStyle: {
                    borderBottomWidth: 4,
                    borderBottomColor: '#2c3e50'
                },
        }} >
            <Tab.Screen name="Movies" component={MoviesContainer} />
            <Tab.Screen name="Search Results" component={SearchContainer} />
            <Tab.Screen name="TV Shows" component={TVShowsContainer} />
        </Tab.Navigator> 
   ) 
}
export default TabsContainer;
