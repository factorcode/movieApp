import React, { useState } from 'react'
import { Button, FormControl, HStack, Icon, Input, VStack, View, Select, Center } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from "react-native";

const SearchForm = props => {

    const { onInputChange, fetchSearch } = props
    const [formData, setData] = useState({})

    const [searchQuery, setSearchQuery] = useState(null);
    // const [searchType, setSearchType] = useState(null);

    //DROPDOWN CODE PROPERTIES
    const [dropTypeValue, setDropTypeValue] = useState("multi");

    const onSubmit = () => {
        fetchSearch()
    }

    return (
        <VStack space={2} width='100%' py={8}>
            <Center px={2}>
                <FormControl isRequired>
                    <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                    <Input
                        placeholder='i.e. James Bond, CSI'
                        variant='filled'
                        bg='gray.200'
                        px={3}
                        InputLeftElement={
                            <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                        }
                        onChangeText={value => {
                            setSearchQuery(value);
                            onInputChange(value, dropTypeValue)
                            setData({ ...formData, name: value })
                        }}
                    />



                    <View style={searchFormStyles.secondSection}>
                        <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                        <HStack width='100%' space={2}>
                            <Select
                                width='70%'
                                defaultValue='multi'
                                onValueChange={value => {
                                    setDropTypeValue(value)
                                    onInputChange(searchQuery, value)
                                }}>
                                <Select.Item label='Movies' value='movie' />
                                <Select.Item label='TV Shows' value='tv' />
                                <Select.Item label='Multi' value='multi' />
                            </Select>

                            <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
                                Search
                            </Button>
                        </HStack>
                    </View>

                </FormControl>
            </Center>
        </VStack>
    )
}

const searchFormStyles = StyleSheet.create({
    secondSection: {
        paddingVertical: 10,
    },

})


export default SearchForm