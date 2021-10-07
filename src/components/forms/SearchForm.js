import React, { useState } from 'react'
import { Button, FormControl, HStack, Icon, Input, VStack, View , Select} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker';

const SearchForm = props => {

    const { onInputChange, fetchSearch } = props
    const [formData, setData] = useState({})

    const [searchQuery, setSearchQuery] = useState(null);
    // const [searchType, setSearchType] = useState(null);

    //DROPDOWN CODE PROPERTIES
    const [open, setOpen] = useState(false);
    const [dropTypeValue, setDropTypeValue] = useState("multi");
    const [items, setItems] = useState([
        { label: 'Multi', value: 'multi' },
        { label: 'Movie', value: 'movie' },
        { label: 'TV', value: 'tv' }
    ]);

    const onSubmit = () => {
        fetchSearch()
    }

    return (
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <HStack width='100%' space={2}>
                    <Input
                        placeholder='i.e. James Bond, CSI'
                        variant='filled'
                        bg='gray.200'
                        px={3}
                        width='85%'
                        InputLeftElement={
                            <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                        }
                        onChangeText={value => {
                            setSearchQuery(value);
                            onInputChange(value, dropTypeValue)
                            setData({ ...formData, name: value })
                        }}
                    />
                </HStack>
                <HStack>
                    <View flex={1}>
                        {/* <DropDownPicker
                        open={open}
                        value={dropTypeValue}
                        items={items}
                        setOpen={setOpen}
                        setValue={setDropTypeValue}
                        setItems={setItems}
                        // onChangeItem={item => {setDropTypeValue(item.value)
                        //     console.log("changed Value to: " + item.value );
                        //     onInputChange(searchQuery, item.value)
                        // }
                        // }

                        onChangeItem={item => console.log("changed Value to: " + item.value )}
                    /> */}
                        <Select
                            
                            defaultValue='multi'
                            onValueChange={value =>{ 
                                setDropTypeValue(value)
                                onInputChange(searchQuery, value)}}>
                            <Select.Item label='Movies' value='movie' />
                            <Select.Item label='TV Shows' value='tv' />
                            <Select.Item label='Multi' value='multi' />
                        </Select>



                        <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
                            Search
                        </Button>
                    </View>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default SearchForm