import { 
  View, 
  Text,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { 
  Home,
  Hymn,
  Donate,
  About,
  Setting,

} from './src/screens';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()
const Tap = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } />
      </Stack.Navigator> */}
      {/* <Drawer.Navigator>
        <Drawer.Screen name='Home' component={ Home }/>
      </Drawer.Navigator> */}
      <Tap.Navigator>
        <Tap.Screen name='Home' component={ Home }/>
        <Tap.Screen name='Hymn' component={ Hymn }/>
        <Tap.Screen name='Donate' component={ Donate }/>
        <Tap.Screen name='About' component={ About }/>
        <Tap.Screen name='Setting' component={ Setting }/>

      </Tap.Navigator>
      
    </NavigationContainer>
  );
}

export default App;