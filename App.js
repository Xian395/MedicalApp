import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BoardingScreen from './screens/Onboard/BoardingScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import TabNavigation from './screens/Navigation/TabNavigation';
import Schedule from './screens/homescreens/Schedule';
import Booked from './screens/homescreens/Booked';
import Analytics from './screens/homescreens/Analytics';
import Slots from './screens/homescreens/Slots';
import AddAppoinment from './screens/homescreens/AddAppointment';
import NextPage from './screens/homescreens/NextPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="board" component={BoardingScreen} options={{headerShown: false}} />
              <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
              <Stack.Screen name="tab" component={TabNavigation} options={{headerShown: false}} />


              <Stack.Screen name="sched" component={Schedule} options={{headerShown: false}} />
              <Stack.Screen name="book" component={Booked} options={{headerShown: false}} />
              <Stack.Screen name="ana" component={Analytics} options={{headerShown: false}} />
              <Stack.Screen name="slot" component={Slots} options={{headerShown: false}} />    

              <Stack.Screen name="add" component={AddAppoinment} options={{headerShown: false}} />   
              <Stack.Screen name="next" component={NextPage} options={{headerShown: false}} />   


        </Stack.Navigator>
    </NavigationContainer>
  );
}


