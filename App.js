import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

import Header from './components/Header';

const App = () => {

  const [data, setData] = useState([]);

    const request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://www.haw-hamburg.de/fileadmin/user_upload/TI-IE/Daten/Stundenplan/ICS/IE6-DP.ics",
      true
    );
    request.send(null);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        const type = request.getResponseHeader("Content-Type");
        if (type.indexOf("text") !== 1) {
          const lines = request.responseText.split("\n");
          let events = [];
          let events_i = 0;
          for ( let i = 0; i < lines.length; i++) {
            if (!lines[i].includes('BEGIN:VEVENT')) {
              continue;
            }

            const dataObject = {
              summary: lines[i + 1].split(':')[1],
              location: lines[i + 2].split(':')[1],
              description: lines[i + 3].split(':')[1],
              start: lines[i + 5].split(':')[1],
              end: lines[i + 6].split(':')[1],
            }

            events.push(dataObject);
          }
          console.log(events);
          //setData(events);
        }
      }
    };
   
    
    const today = new Date()
  return (
    <View style={styles.container}>
      <Header date={today.toDateString()} day='Today'></Header>
      <Text>Hello World!</Text>    
      <View style={styles.rectangular} />      
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
  rectangular: {
    height: 20,
    width: 200,
    backgroundColor: 'red',
  },
  response: {
    flex:2,
  },

})

export default App;
