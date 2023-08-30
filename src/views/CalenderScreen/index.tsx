import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {convertDate} from '../../utils';
import {Colors} from '../../utils/color';
import {weekDays} from '../../utils/calendar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {ScreenName} from '../../navigation/screenname';

const {width, height} = Dimensions.get('window');

export default function CalenderScreen() {
  const [dateList, setDateList] = useState<number[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    handleDayWeeks();
  }, []);

  const handleDayWeeks = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const firstDayOfWeek = new Date(
      today.getTime() - (dayOfWeek - 1) * 24 * 60 * 60 * 1000,
    );
    let array = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(firstDayOfWeek.getTime() + i * 24 * 60 * 60 * 1000);
      array.push(date.getDate());
    }
    setDateList(array || []);
  };

  const renderTodoList = () => {
    return (
      <View style={[styles.todoList, styles.boxShadow]}>
        {remderEmtyList()}
      </View>
    );
  };

  const remderEmtyList = () => {
    return <MaterialIcons name="post-add" size={90} color={Colors.white} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.datenow}>{convertDate(new Date())}</Text>
      <Text style={styles.today}>Today</Text>
      <View style={styles.calender}>
        {weekDays.map((e, index) => {
          return (
            <View
              key={e}
              style={[
                styles.itemCalendar,
                new Date().getDate() === dateList[index] && [
                  styles.boxShadow,
                  {
                    backgroundColor: Colors.yellow,
                  },
                ],
              ]}>
              <Text
                style={
                  new Date().getDate() === dateList[index]
                    ? styles.weeksActive
                    : styles.weeks
                }>
                {e}
              </Text>
              <Text
                style={
                  new Date().getDate() === dateList[index]
                    ? styles.weeksActive
                    : styles.weeks
                }>
                {dateList[index] ? dateList[index] : 1}
              </Text>
            </View>
          );
        })}
      </View>
      {renderTodoList()}
      <View style={styles.addEvent}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.addCalendar)}>
          <View style={styles.button}>
            <FontAwesome
              name="calendar-plus-o"
              size={20}
              color={Colors.white}
            />
            <Text style={styles.textBtn}>Add Event</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 15,
    backgroundColor: Colors.white,
  },
  datenow: {
    color: Colors.black,
    fontSize: 24,
    marginTop: 20,
  },
  today: {
    textTransform: 'uppercase',
    color: Colors.yellow,
    fontWeight: 'bold',
  },
  calender: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  itemCalendar: {
    backgroundColor: Colors.yellow2,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 5,
    alignItems: 'center',
    marginHorizontal: 2,
    height: 80,
    borderRadius: 8,
  },
  weeks: {
    color: Colors.black,
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  weeksActive: {
    color: Colors.white,
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  todoList: {
    marginTop: 15,
    backgroundColor: Colors.yellow3,
    // height: height - 500,
    flex: 1,
    width: width - 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  addEvent: {
    display: 'flex',
    marginTop: 40,
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: Colors.white,
    marginLeft: 5,
  },
});
