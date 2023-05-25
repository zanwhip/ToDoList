import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from './components/task';
import Form from './components/form';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.headerText}> TO DO LIST </Text>
        <ScrollView style={styles.items}>
          <Task />
        </ScrollView>       
        </View>
        <Form />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3fcee',
   
  },
  body: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,

  },
  headerText : {
    fontSize : 20,
    color : '#21a3d0',
    fontWeight : 'bold',
  }
 
});
