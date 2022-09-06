import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TodoScreen from '../screens/ToDoApp';

const navigation = createStackNavigator();
const TodoNavigation = () => {
  return (
    <navigation.Navigator>
      <navigation.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={{headerShown: false}}
      />
    </navigation.Navigator>
  );
};

export default function Todo() {
  return (
    <NavigationContainer>
      <TodoNavigation />
    </NavigationContainer>
  );
}
