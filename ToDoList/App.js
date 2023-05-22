import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.headerText}> TO DO LIST </Text>
        <View>
          <View style={styles.item}>
            <View style={styles.square}  >
              <Text style={styles.number}> 01</Text>
            </View>
            <Text style={styles.content}> Item 1</Text>
          </View>
          
          <View style={styles.item}>
            <View style={styles.square} >
              <Text style={styles.number}> 02</Text>
            </View>
            <Text style={styles.content}> Item 2</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.square}  >
              <Text style={styles.number}> 02</Text>
            </View>
            <Text style={styles.content}> Item 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3fcee',
   
  },
  body: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,

  },
  headerText : {
    fontSize : 20,
    color : '#21a3d0',
    fontWeight : 'bold',
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
});
