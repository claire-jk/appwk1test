import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name:陳筠蒨</Text>
      <Text style={styles.text}>Student Number:111319040</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5757574d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b885ffff', // 改變文字顏色
    fontSize: 25,   // 可以調整字型大小
  },
});