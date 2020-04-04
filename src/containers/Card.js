import React from 'react';
import { View, StyleSheet } from 'react-native';

const { style } = StyleSheet.create({
  style: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
    marginTop: 8
  }
});

export default function Card ({ children }) {
  return (
    <View style={style}>
      { children }
    </View>
  )
}