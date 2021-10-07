import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from '../screens/Tabs'
import DescriptionScreen from '../screens/DescriptionScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Tabs'
                component={Tabs}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#2c3e50'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }}
            />

            <Stack.Screen
                name="DescriptionPage"
                component={DescriptionScreen}
                options={({ route }) => ({ headerBackTitle: 'Back to List', headerTitle: route.params.name })} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack