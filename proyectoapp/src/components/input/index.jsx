import React from "react";
import { TextInput, Button, View } from "react-native";
import { styles } from "./styles";

const Input = ({ placeholder, value, onChangeText, buttoncolor, buttontitle, onhandlerbutton})=> {
    return (
        <View style={styles.textinput}>
        <TextInput 
        placeholder= {placeholder} 
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        />
        <Button title={buttontitle} color={buttoncolor} onPress={onhandlerbutton} />
    </View>  
    )
}

export default Input;