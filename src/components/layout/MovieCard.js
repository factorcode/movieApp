import React from 'react'
import { Box, Button, Center, Text, Image } from 'native-base'
import { IMG_URL_BASE } from '../config/api_config'


const MovieCard = (props) => {

    const { cardId, cardType, title, popularity, img, releaseDate, navigation } = props

    const imageUri = `${IMG_URL_BASE}/${img}`;

    return (
        <>
            <Box width='100%'>
                <Center py={10}>
                    <Text>{title}</Text>
                    <Image alt={title} source={{ uri: imageUri }} size={'2xl'}/>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Button
                        onPress={() =>
                            navigation.navigate('DescriptionPage', { name: title, id: cardId, type: cardType })
                        }
                    >
                        Show Details
                    </Button>
                </Center>
            </Box>
        </>

    )
}
export default MovieCard;
