import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'



const Form = () => {
  const [task, setTask] = useState('')
  const handleAddTask = () => {
    if(task.length === 0) 
    {
      alert('please enter your task ')
      return false;
    }
    alert(task);
  }
  return (
    <View >
      <View style={styles.addTask}>
        <TextInput 
        onChangeText={(text) => setTask(text)}
        placeholder='Add tasks'
        style={styles.input}/>
        <TouchableOpacity onPress={handleAddTask} >
        <View style={styles.iconwrapper}>
        <Text style={styles.icon}> + </Text>
        </View>
        </TouchableOpacity>  
      </View>
    </View>
  )
}

export default Form;

const styles = StyleSheet.create({
    addTask : {
        bottom : 20,
        paddingHorizontal: 20,
        flexDirection : 'row',
        alignContent : 'center'
    },
   input : {
    height : 40,
    width : 300,
    backgroundColor : '#fff',
    borderRadius : 20,
    borderColor : '#4169E1',
    borderWidth: 2,
    paddingHorizontal : 20,
    paddingVertical : 10,
   } ,
   iconwrapper : {
    width : 44,
    height: 44,
    backgroundColor : '#21a3d0',
    borderRadius : 44,
    alignItems: 'center',
    justifyContent : 'center',
    borderColor: '#fff',
    borderWidth : 2,
   },
   icon : {
    fontSize : 25,
    color : '#fff'
   }
})