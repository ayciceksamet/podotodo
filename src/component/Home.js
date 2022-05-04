import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Pressable, SafeAreaView } from 'react-native';
import Task from './Task';
import Modal from "react-native-modal";

import InputSpinner from 'react-native-input-spinner';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { addTodo } from './feature/todosSlice';

export default function App({navigation}) {
  const [taskItems, setTaskItems] = useState([]);
  const [podoCount, setPodoCount] = useState();
  const [text, setText] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
       setModalVisible(true)
  }

  const closeModal = () => {
       console.log("KAPATILDI")
       setModalVisible(false)
  }


  const setTaskInfo = (taskText, podoCount) => {
        let todos = {}

        todos.text = taskText

        console.log("podoCount")

        console.log(podoCount)

        let podoCountValue = podoCount
        todos.podoCount = podoCountValue

        return todos

  }

  const handleAddTask = (text, podoCount) => {
    Keyboard.dismiss();
    if(!podoCount){
      podoCount = 1
    }
    dispatch(addTodo(text,podoCount))
    let task = setTaskInfo(text,podoCount)
    setTaskItems([...taskItems, task])
    setText("")
    setPodoCount("")
    setModalVisible(!modalVisible)
 
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Task List</Text>
        
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item.text} podoCount={item.podoCount} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      

      <View style={styles.centeredView}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => closeModal()}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.bottomModalView}
        hasBackdrop={true}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>           
            <TextInput 
            style={styles.input} 
            multiline
            enablesReturnKeyAutomatically =  {true}
            placeholder={"Let's Create a todo..."} 
            value={text} 
            onChangeText={textValue => setText(textValue)} />
            <InputSpinner
                max={5}
                min={1}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#40c5f4"}
                value={1}
                height={50}
                width={20}
                skin={"modern"}
                style={styles.inputSpinner}
                onChange={(num)=>{setPodoCount(num)}}>
            </InputSpinner>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleAddTask(text, podoCount)}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
    </View>
  
      <View style={styles.writeTaskWrapper}>
        
        <TouchableOpacity onPress={() => openModal()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#267fc1",
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    paddingRight: 20,
    bottom: 40,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#267fc1",
  },
  buttonClose: {
    backgroundColor: "#267fc1",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputSpinner: {
    marginTop: 15,
    marginBottom: 15,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 350,
    height: 75,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#267fc1',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: "white",
    fontSize: 30,
    fontWeight: 'bold',
  },
});