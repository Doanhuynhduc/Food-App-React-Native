import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../scene/Home';
import OnBoardScreens from '../scene/OnBoardScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnBoard" component={OnBoardScreens} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
