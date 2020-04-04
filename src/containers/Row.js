import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Row ({ children, alignment }) {

  const styles = {
    flexDirection: 'row',
    marginBottom: 5
  }

  alignment && ( styles.justifyContent = alignment);

  const { style } = StyleSheet.create({
    style: styles
  })

  return (
    <View style={style}>
      { children }
    </View>
  )
}