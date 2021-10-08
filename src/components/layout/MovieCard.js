import React from 'react'
import { Box, Button, Center, Text, Image, View } from 'native-base'
import { IMG_URL_BASE } from '../config/api_config'
import { StyleSheet } from "react-native";
import { HStack, VStack, } from 'native-base'


const MovieCard = (props) => {

    const { cardId, cardType, title, popularity, img, releaseDate, navigation } = props

    const imageUri = `${IMG_URL_BASE}/${img}`;

    return (
        <>
            <Box width='100%' style={movieCardStyles.box}>
                <HStack style={movieCardStyles.gaps} space={3}>
                    <View style={movieCardStyles.boxImage} >
                        <Image alt={title} source={{ uri: imageUri }} style={movieCardStyles.image} />
                        {/* size={'2xl'} */}
                    </View>
                    <VStack space={2}>
                        <Text style={movieCardStyles.textSize}>{title}</Text>

                        <Text>Popularity: {popularity}</Text>
                        <Text>Release Date: {releaseDate}</Text>
                        <Button
                            onPress={() =>
                                navigation.navigate('DescriptionPage', { name: title, id: cardId, type: cardType })
                            }
                        >
                            Show Details
                        </Button>
                    </VStack>
                </HStack>
            </Box>
        </>

    )
}

const movieCardStyles = StyleSheet.create({
    box: {
        paddingVertical: 10,
        maxWidth: '100%'
    },
    boxImage: {
        // width: '45%',
        flexBasis: 100,

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    textSize: {
        fontWeight: 'bold',
        fontSize: 15
    },
    cardDetails: {

    }
})

export default MovieCard;
