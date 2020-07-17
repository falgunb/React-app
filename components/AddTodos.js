import React,{ useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
  } from "react-native"; 

  export default function addTodo({submitHandler}){
    const[text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

      return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder="New Todo..."
            onChangeText={changeHandler}/>

        <Button onPress={() => submitHandler(text)} title='Add' color='coral'/>

        </View>

      );
  }

  const styles = StyleSheet.create({
      input:{
          marginBottom: 10,
          paddingHorizontal: 8,
          borderBottomWidth: 1,
          borderBottomColor: '#ddd'
      }
  })