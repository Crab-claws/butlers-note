import React, {Component, useState} from "react";
import {Switch, TextInput, View, Text, Button, Modal, DatePickerAndroid} from "react-native";
import ModalSelector from 'react-native-modal-selector'
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from "./Datetime";

const PoopPicker = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("pebble");
    const showModal = () => {
        console.log("selected", selectedLanguage);
        setOpenModal(true);
    };

    const hideModal = () => {
        setOpenModal(false);
    }


    return (
        <View>
            <DateTimePicker />
            <ModalSelector data={[
                {key:"pebble", label:"토끼똥"},

                {key:"log-shape", label:"맛동산"},
                {key:"liquid", label:"물똥"}
            ]}
                           initValue="Poop type"
                           onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }}
                           />
        </View>
    );


}
export default PoopPicker;
