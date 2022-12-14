import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

const App = () => {
    const [selectedValue, setSelectedValue] = useState("log-shaped");
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="토끼 똥 모양" value="pebble" />
                <Picker.Item label="단단함" value="hard" />
                <Picker.Item label="촉촉한 맛동산" value="log-shaped" />
                <Picker.Item label="축축하고 힘없음" value="moist" />
                <Picker.Item label="약간 액체" value="partialy-liquid" />
                <Picker.Item label="액체" value="liquid" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});

export default App;