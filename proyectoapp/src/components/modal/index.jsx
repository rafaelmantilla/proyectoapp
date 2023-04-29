import React from "react";
import {Modal, View, Text, Button} from "react-native";
import {styles} from "./styles";


const CustomModal = ({modalVisible, animationType, selectedEvent, onCancel, onDelete})=>{
    return (
<Modal visible={modalVisible} animationType={animationType}>
<View style={styles.modalconteiner}>
  <Text style={styles.modaltitle}> Task Detail</Text>
  <View>
    <Text style={styles.modaldetailconteiner}> esta seguro de eliminarlo?</Text>
    <Text style={styles.modalevent}>{selectedEvent?.value}</Text>
  </View>
  <View style={styles.buttoncontainer}>
    <Button 
    title='Cancel'
    color= "blue"
    onPress={onCancel}
    />
    <Button 
    title='Eliminar'
    color = "red"
    onPress={()=> onDelete (selectedEvent.id)}
    />
  </View>
</View>
</Modal>  
    )
};

export default CustomModal;
