import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';

import image from '../../constants/images';

import styles from './style';

const index = ({item, index, deleteTask, editText}) => {
  const deleteAlert = () => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => deleteTask(item?._ref?._documentPath?._parts[1]),
      },
    ]);
  };

  return (
    <View style={styles.Task}>
      <View style={{backgroundColor: '#3c305e', borderRadius: 10, padding: 10}}>
        <Text style={[styles.TaskName, {marginTop: 0}]}>{index + 1}</Text>
      </View>
      <View style={styles.TextPart}>
        <Pressable onPress={() => editText(item, index)}>
          <Text style={[styles.TaskName, {marginTop: 0}]}>
            {item?._data?.title}
          </Text>
        </Pressable>
        <TouchableOpacity onPress={() => deleteAlert()}>
          <Image source={image.Delete} style={styles.DeleteImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
