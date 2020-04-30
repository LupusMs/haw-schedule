import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DailySchedule = (props) => {

  const [data, setData] = useState([]);
  let events = [];

  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://www.haw-hamburg.de/fileadmin/user_upload/TI-IE/Daten/Stundenplan/ICS/IE6-BU.ics",
    true
  );
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const type = request.getResponseHeader("Content-Type");
      if (type.indexOf("text") !== 1) {
        const lines = request.responseText.split("\n");
        for (let i = 0; i < lines.length; i++) {
          if (!lines[i].includes('BEGIN:VEVENT')) {
            continue;
          }

          const dataObject = {
            id: lines[i + 1].split(':')[1] + lines[i + 5].split(':')[1],
            summary: lines[i + 1].split(':')[1],
            location: lines[i + 2].split(':')[1],
            description: lines[i + 3].split(':')[1],
            start: lines[i + 5].split(':')[1],
            end: lines[i + 6].split(':')[1],
          }

          events.push(dataObject);
        }
        setData(events);
      }
    }
  };

  useEffect(() => {
    request.send(null);
  }, []);

  function Item({ data }) {
    const DAY_STARTED = 8.0;
    const DAY_END = 20.0;


    const dt = new Date(data.start.slice(0, 4),
      data.start.slice(4, 6),
      data.start.slice(6, 8),
      data.start.slice(9, 11),
      data.start.slice(11, 13),
      data.start.slice(13));

    const leftMargin = ((dt.getHours() + (dt.getMinutes() / 60.0) - DAY_STARTED) / (DAY_END - DAY_STARTED)) * 100 + '%';
    console.log(leftMargin);

    return (
      <View style={styles.items} >
        <Text >{data.summary}</Text>
        <Text >{data.location}</Text>
        <Text >{data.description}</Text>
        <View style={{
          height: 20,
          marginLeft: leftMargin,
          width: 100,
          backgroundColor: 'red'
        }} />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    padding: 20,
  }
})


export default DailySchedule;
