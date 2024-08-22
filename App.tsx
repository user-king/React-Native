import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from './Checkout';
import Session from './Session';
import ShowCheckout from './ShowCheckout';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Checkout">
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Session" component={Session} />
          <Stack.Screen name="ShowCheckout" component={ShowCheckout} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
