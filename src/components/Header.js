import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logoPng from '../assets/logo.png';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  }
})

export default function Header ({ children }) {
  return (
    <View style={styles.header}>
      <Image source={logoPng}/>
      { children }
    </View>
  )
}