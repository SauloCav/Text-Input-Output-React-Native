import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputComponent from './Components/TextInputComponent';
import OutputComponent from './Components/OutputComponent';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInputComponent
        label="The meaning of life, the universe, and everything"
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Type here"
      />
      <OutputComponent text={inputValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});