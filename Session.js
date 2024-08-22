import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Session = () => {
  const navigation = useNavigation();

  const handleOkPress = () => {
    navigation.navigate('CheckoutForm');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'red', marginBottom: 20 }}>Your session has expired.</Text>
      <Button title="OK" onPress={handleOkPress} />
    </View>
  );
};

export default Session;
