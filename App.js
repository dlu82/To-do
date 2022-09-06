import React from 'react';
import {View, Text, SafeAreaView, LogBox} from 'react-native';
import ToDo from './src/screens/ToDoApp';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <React.StrictMode>
      <SafeAreaView style={{flex: 1}}>
        <ToDo />
      </SafeAreaView>
    </React.StrictMode>
  );
};

export default App;
