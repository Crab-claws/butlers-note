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

const Stack = createNativeStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Food" component={FoodScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
}