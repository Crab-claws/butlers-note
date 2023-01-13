import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Alert, Image, Text, View, Button} from 'react-native';
import {SignInButton} from './src/Button';
import test from './img/dahara.png';
import DateTimePicker from './src/Datetime';
import PoopPicker from "./src/PoopPicker";
export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
            <Image
            source={test}
            />
            <Button title={"대소변"} onPress={() => Alert.alert("대소변")}/>
            <Button title={"식사"} onPress={() => Alert.alert("식사")}/>

            <SignInButton />
            <DateTimePicker />
            <PoopPicker />
            <StatusBar style="auto" />
        </View>
    </NavigationContainer>
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
