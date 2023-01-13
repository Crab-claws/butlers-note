import React, {Component, useState} from "react";
import {Switch, TextInput, View, Text, Button, Modal} from "react-native";
import ModalSelector from 'react-native-modal-selector'
import {Picker} from '@react-native-picker/picker';

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
            <Button title="Input Poop Type"
                onPress={() => {
                    showModal()
                }}
            />
            <Modal style={{height: 100}} visible={openModal}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedLanguage(itemValue);
                        console.log(itemValue);
                    }
                    }>
                    <Picker.Item label="토끼똥" value="pebble"/>
                    <Picker.Item label="맛동산" value="log-shaped"/>
                    <Picker.Item label="물똥" value="liquid"/>
                </Picker>

            </Modal>
        </View>
    );


}
export default PoopPicker;
