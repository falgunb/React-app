import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Touchable,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import Header from './components/header';
import TodoItem from "./components/TodoItem";
import AddTodos from "./components/AddTodos";

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy tea', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play MCOC', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((pervTodos) => {
      return pervTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((pervTodos) => {
      return [
        {text : text, key : Math.random().toString() },
        ...pervTodos
      ];
    })
  }

  return(
  <View style={styles.container}>

    <Header/>

    <View style={styles.content}>
      
      <AddTodos submitHandler={submitHandler}/>

      <View style={styles.list}>
        <FlatList 
          data = {todos}
          renderItem={({ item })=> (
          <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>
    </View>
  </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    padding: 50,
  },
  list:{
    marginTop: 20,
  }
});
