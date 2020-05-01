import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DownloadScreen from './screens/DownloadScreen';

const App = () => {

  const today = new Date();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue',
          },
        }}>
        <Stack.Screen name='Home' component={HomeScreen}
          options={{
            title: today.toDateString(),
          }} />
        <Stack.Screen name="Download" component={DownloadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
