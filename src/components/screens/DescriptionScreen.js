import { TabRouter } from '@react-navigation/routers'
import React from 'react'
import DescriptionContainer from '../containers/DescriptionContainer'

const DescriptionScreen = (props) => <DescriptionContainer navigation={props.navigation} requestParameters ={props.route.params}/>

export default DescriptionScreen