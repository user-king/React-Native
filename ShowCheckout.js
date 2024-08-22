import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ShowCheckout = () => {
  const form = useSelector((state) => state.form);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout Form</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Booking ID</Text>
        <Text style={styles.value}>{form.bookingID}</Text>

        <Text style={styles.label}>First Name</Text>
        <Text style={styles.value}>{form.firstName}</Text>

        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.value}>{form.lastName}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{form.email}</Text>

        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{form.date.toLocaleDateString()}</Text>

        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{form.time.toLocaleTimeString()}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ShowCheckout;
