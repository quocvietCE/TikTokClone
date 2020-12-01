import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import RootRouter from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <RootRouter />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default App;
