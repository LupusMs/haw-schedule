import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

import Header from './components/Header';
import DailySchedule from './components/DailySchedule';

const App = () => {



  const today = new Date()
  return (
    <View style={styles.container}>
      <Header date={today.toDateString()} day='Today'></Header>
      <DailySchedule></DailySchedule>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    margin: 20,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  response: {
    flex: 2,
  },

})

export default App;
