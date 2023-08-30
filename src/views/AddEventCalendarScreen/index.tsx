import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarComponents from '../../components/Calendar';

const {width, height} = Dimensions.get('window');

export default function AddEventCalendarScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color={Colors.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="check" size={30} color={Colors.yellow} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Create Date Event</Text>
        <View>
          <Text style={styles.titleForm}>Title</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CalendarComponents />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: width - 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 15,
    backgroundColor: Colors.white,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginVertical: 30,
    fontSize: 23,
    fontWeight: 'bold',
    color: Colors.black,
  },
  form: {
    paddingHorizontal: 15,
  },
  titleForm: {
    color: Colors.violet,
    fontWeight: '700',
  },
  input: {
    backgroundColor: Colors.violet2,
    paddingHorizontal: 10,
    fontSize: 18,
    color: Colors.violet,
    marginTop: 10,
  },
});
