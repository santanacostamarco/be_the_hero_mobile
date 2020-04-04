import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const { style } = StyleSheet.create({
  style: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  }
});

export default function Container({ children }) {
  return (
    <View style={style}>
      { children }
    </View>
  )
}