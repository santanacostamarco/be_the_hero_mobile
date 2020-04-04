import React from 'react';
import { Text, StyleSheet } from 'react-native';

const { style } = StyleSheet.create({
  style: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 24,
    color:'#13131a',
    fontWeight: 'bold'
  }
});

export default function Title ({ children }) {
  return (
    <Text style={style}>
      { children }
    </Text>
  )
}