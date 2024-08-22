import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Countdown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { resetForm, setBookingID, updateForm } from './redux/actions/action';

const Checkout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    dispatch(updateForm(name, value));
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!form.firstName) {
      valid = false;
      errors.firstName = 'First Name is required';
    }

    if (!form.lastName) {
      valid = false;
      errors.lastName = 'Last Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }

    if (!form.date) {
      valid = false;
      errors.date = 'Date is required';
    }

    if (!form.time) {
      valid = false;
      errors.time = 'Time is required';
    }

    setErrors(errors);
    return valid;
  };

  const generateBookingID = () => {
    return 'XXXX22YYZZ';
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const bookingID = generateBookingID();
      dispatch(setBookingID(bookingID));
      navigation.navigate('ShowCheckout');
    } else {
      Alert.alert('Validation Error', 'Please fix the errors before submitting.');
    }
  };

  const onTimeExpired = () => {
    Alert.alert(
      'Session Expired',
      'Your session has expired',
      [{ text: 'OK', onPress: () => {
        dispatch(resetForm());
        navigation.navigate('Session');
      } }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Countdown
          until={60} // 1 minute in seconds
          size={20}
          onFinish={onTimeExpired}
          digitStyle={{ backgroundColor: '#FF0000' }}
          digitTxtStyle={{ color: '#FFF' }}
          timeToShow={['M', 'S']}
          showSeparator
          separatorStyle={{ color: '#FFF' }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Checkout Form</Text>
        <TextInput
          placeholder="First Name"
          value={form.firstName}
          onChangeText={(value) => handleInputChange('firstName', value)}
          style={[styles.input, { borderColor: errors.firstName ? 'red' : '#000' }]}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
        <TextInput
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={(value) => handleInputChange('lastName', value)}
          style={[styles.input, { borderColor: errors.lastName ? 'red' : '#000' }]}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
        <TextInput
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => handleInputChange('email', value)}
          style={[styles.input, { borderColor: errors.email ? 'red' : '#000' }]}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        <DateTimePicker
          value={form.date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleInputChange('date', selectedDate || form.date)}
          style={styles.picker}
        />
        {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
        <DateTimePicker
          value={form.time}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => handleInputChange('time', selectedTime || form.time)}
          style={styles.picker}
        />
        {errors.time && <Text style={styles.errorText}>{errors.time}</Text>}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingBottom: 8,
  },
  picker: {
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Checkout;
