import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.day}>{props.day}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 20,
    backgroundColor: 'lightblue'
  },
  date: {
    color: 'white',
    fontSize: 20,
  },
  day: {
    color: 'white',
    fontSize: 18,
  },

})

export default Header;
