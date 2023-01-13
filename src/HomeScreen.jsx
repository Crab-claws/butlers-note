import {Alert, Button, Image, StyleSheet, Text, View} from "react-native";
import test from "../img/dahara.png";
import {SignInButton} from "./Button";
import DateTimePicker from "./Datetime";
import PoopPicker from "./PoopPicker";
import {StatusBar} from "expo-status-bar";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={test}
            />
            <Button title={"대소변"} onPress={() => Alert.alert("대소변")}/>
            <Button title={"식사"} onPress={() => navigation.navigate('Food')}/>

            <SignInButton />
            <DateTimePicker />
            <PoopPicker />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
