import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Keyboard} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import style from './style';
import Task from '../../components/TaskComponent';
import Add from '../../components/AddPart';

const index = ({}) => {
  const [listArray, setListArray] = useState([]);
  const [task, setTask] = useState('');
  const [isEditId, setIsEditId] = useState(null);

  // console.log('EDIT ID=========', isEditId);

  const onResult = QuerySnapshot => {
    // console.log('Got Users collection result.======', QuerySnapshot);
    if (QuerySnapshot?._docs.length > 0) {
      setListArray(QuerySnapshot?._docs);
    } else {
      setListArray([]);
    }
  };

  const onError = error => {
    // console.error('errooor=====>>  ', error);
  };

  useEffect(() => {
    firestore().collection('Todo').onSnapshot(onResult, onError);
  }, []);

  const Todos = () => {
    if (task != '') {
      if (isEditId == null) {
        // console.log('todo click======');
        firestore()
          .collection('Todo')
          .add({
            title: task,
            message: 'success',
          })
          .then(res => {
            console.log('User added!===== ', res);
          });
        setTask('');
        Keyboard.dismiss();

        // .catch(err => console.log('==============', {err}));
      } else {
        firestore()
          .collection('Todo')
          .doc(isEditId)
          .update({
            title: task,
            message: 'Updated',
          })
          .then(() => {
            console.log('User updated!');
            setTask('');
          });
        setIsEditId(null);
        Keyboard.dismiss();
      }
    }
  };

  const deleteTask = ID => {
    // console.log('ID=========>>>>>    ', ID);
    firestore()
      .collection('Todo')
      .doc(ID)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  };
  const editText = (item, index) => {
    setTask(item?._data?.title);
    setIsEditId(item?._ref?._documentPath?._parts[1]);
  };
  return (
    <View style={style.container}>
      <KeyboardAwareScrollView>
        <Text style={style.MainHead}>TODO LIST</Text>
        <FlatList
          data={listArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Task
              item={item}
              index={index}
              setListArray={setListArray}
              listArray={listArray}
              deleteTask={deleteTask}
              editText={editText}
            />
          )}
          contentContainerStyle={{marginBottom: 10}}
        />
      </KeyboardAwareScrollView>
      <View style={style.AddCompnt}>
        <Add
          setListArray={setListArray}
          listArray={listArray}
          task={task}
          setTask={setTask}
          isEditId={isEditId}
          setIsEditId={setIsEditId}
          editText={editText}
          Todos={Todos}
        />
      </View>
    </View>
  );
};

export default index;
