import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LmaoScreen from './screens/lmao';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="lmao"
          component={LmaoScreen}
          options={{ title: 'LMAO' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;