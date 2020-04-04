import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#41414d',
    marginBottom: 5
  },

  value: {
    color: '#737380',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default function Property ({ label, value }) {
  return (
    <View>
        <Text style={styles.label}> {label} </Text>
        <Text style={styles.value}> { value } </Text>
      </View>
  )
}