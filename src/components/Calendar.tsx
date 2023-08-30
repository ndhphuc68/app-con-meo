/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../utils/color';
import {months, nDays, weekDays} from '../utils/calendar';

export default function CalendarComponents() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  let daysOfMonth = [];

  for (let i = 1; i <= day; i++) {
    const currentDate = new Date(year, month, i);
    const currentDayOfWeek = currentDate.getDay();

    if (currentDayOfWeek === 0) {
      console.log(daysOfMonth);
      daysOfMonth = [];
    }

    daysOfMonth.push(i);
  }

  if (daysOfMonth.length > 0) {
    console.log(daysOfMonth);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color={Colors.violet}
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{marginRight: 6}}>{months[month]}</Text>
          <Text>{year}</Text>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={Colors.violet}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {weekDays.map(e => {
          return <Text key={e}>{e}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
  },
});
