import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './Components/Routes/Routes';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
