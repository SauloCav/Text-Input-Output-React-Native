import React from 'react';
import { Text, StyleSheet } from 'react-native';

const OutputComponent = ({ text }) => {
  return <Text style={styles.output}>Answer: {text}</Text>;
};

const styles = StyleSheet.create({
  output: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default OutputComponent;