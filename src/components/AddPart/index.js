import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import style from './style';
import image from '../../constants/images';

const index = ({task, setTask, Todos}) => {
  return (
    <View style={style.AddPart}>
      <TextInput
        placeholder="Create Task"
        style={style.AddText}
        placeholderTextColor={'white'}
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity onPress={() => Todos()}>
        <Image
          source={image.Up}
          style={{width: 30, height: 30, tintColor: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default index;
