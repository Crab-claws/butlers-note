// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="About" component={AboutScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import FoodScreen from "./src/FoodScreen";
import PoopPicker from "./src/PoopPicker";
import DateTimePicker from "react-native-modal-datetime-picker";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Food" component={FoodScreen} />
              <Stack.Screen name="Poop" component={PoopPicker} />
                <Stack.Screen name="Date" component={DateTimePicker} />

          </Stack.Navigator>
      </NavigationContainer>
    );
}