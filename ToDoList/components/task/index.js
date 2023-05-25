import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'


const Task = () => {   
  return (
    <TouchableOpacity>
    <View style={styles.item}>
        <View style={styles.square} >
          <Text style={styles.number}> 02</Text>
        </View>
        <Text style={styles.content}> Item 2</Text>
      </View>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  items :{
      marginTop : 10,
    },
item : {
  flexDirection : 'row',
  backgroundColor : '#fff',
  marginTop : 10, 
  paddingVertical : 10,
  paddingHorizontal : 10,
  borderRadius: 8,
  justifyContent : 'space-between',

},
square : {
  width : 30,
  height : 30,
  backgroundColor: '#5abfed',
  borderRadius : 6,
  alignContent: 'center',
  justifyContent: 'center',
 
},
number : {
  color : "#fff",
  fontSize : 15,
  fontWeight : 'bold',
  marginLeft : 3,
},
content : {
  width : 270,
  fontSize : 15,
  alignContent : 'center',
  justifyContent : 'center',
  marginTop : 5,
}
})

export default Task
