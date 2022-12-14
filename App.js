import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Alert, Image, Text, View} from 'react-native';
import {SignInButton} from './src/Button';
import test from './img/dahara.png';
import DateTimePicker from './src/Datetime';
import PoopPicker from "./src/PoopPicker";

export default function App() {
  return (

    <View style={styles.container}>
        <Image
        source={test}
        />
        <SignInButton />
        <DateTimePicker/>
        {/*<PoopPicker />*/}
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
