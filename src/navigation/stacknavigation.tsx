import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//components
import Home from '../scene/Home';
import OnBoardScreens from '../scene/OnBoardScreen';
import DetailFood from '../scene/DetailFood';
import Cart from '../scene/Cart';

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
        <Stack.Screen name="DetailFood" component={DetailFood} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
