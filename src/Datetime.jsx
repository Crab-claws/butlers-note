import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const [isVisible, setVisible] = useState(false);
const [date, setDate] = useState('');



const DateTimePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.info("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View>
            <Button title="Input Poop time Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DateTimePicker;