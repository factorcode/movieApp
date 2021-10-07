import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SelectInput = ({onchange, listItems}) => {

    const [open, setOpen] = useState(false);    
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(listItems);

    return (
        
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={(val) => {
                    console.log("Dropselect changed value to: " +val);
                    onchange(val)
                  }}
            />
       
    )
}
export default SelectInput;