
import React from 'react'
import { Box, Button, Center, Text } from 'native-base'
import { IMG_URL_BASE } from '../config/api_config'


const MovieCard = (props) => {

    const { title, popularity, img, releaseDate } = props

    const imageUri = `${IMG_URL_BASE}${img}`;

    return (
        <>
            <Box width='100%'>
                <Center py={10}>
                    <Text>{title}</Text>
                    <Button
                        onPress={() =>
                            navigation.navigate('Web', {
                                label,
                                url
                            })
                        }
                        variant='ghost'
                    >
                        View Online
                    </Button>
                </Center>
            </Box>
        </>

    )
}
export default MovieCard;
