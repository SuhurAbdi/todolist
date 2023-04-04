import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Tasks from './components/Tasks';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [taskitems, setTaskItems] = useState([]);


  const handleAddTask = () =>{
    Keyboard.dismiss();
   setTaskItems([...taskitems, task])
   setTask(null);
  }
  const completeTask = (index) =>{
let itemsCopy = [...taskitems];
itemsCopy.splice(index, 1);
setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
     {/* Today's Tasks */}
     <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
      <View style={styles.items}>
      {/* This is where the tasks will go! */}
      {
        taskitems.map((item, index) => {
         return(
          <TouchableOpacity  key={index} onPress={()=> completeTask(index)}>
            <Tasks text={item}/>
          </TouchableOpacity>
         ) 
        })
      }
      {/*<Tasks text={'Task 1'}/>
      <Tasks text={'Task 2'}/>*/} 
    
     </View>

     </View>
     
     {/* Write a task*/}
     <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.writeTaskWrapper}>
<TextInput  style={styles.input} placeholder='Write a task' value={task}
onChangeText={text => setTask(text) }/>
<TouchableOpacity onPress={() => handleAddTask()}>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
     </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  
  },
  tasksWrapper:{
paddingTop:80,
paddingHorizontal:20,
  },
  sectionTitle:{
fontSize:24,
fontWeight:'bold'
  },
  items:{
marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
backgroundColor:'#fff',
borderRadius:60,
borderColor:'#C0C0C0',
borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
borderWidth:1,
  },
  addText:{},
});
