import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Input, Events, CustomModal} from './components';
import { styles } from './styles';

export default function App() {
  const [text, setText]= useState("");
  const [events, setEvents]= useState ([]);
  const [modalVisible, setModalVisible] = useState (false);
  const [selectedEvent, setSelectedEvent] = useState (null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents ([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText("");
  }

 const onHandlerEvent=(id) => {
  setModalVisible (!modalVisible);
  const selectedEvent = events.find(Event => Event.id === id);
  setSelectedEvent (selectedEvent);
 }

const onHandlerCancelModal =() =>{
  setModalVisible (!modalVisible);
  setSelectedEvent(null);
}

const onHandlerdelete =(id) => {
  setEvents (events.filter(Event => Event.id !== id));
  setModalVisible (!modalVisible);
}
 


  return (
    <View style={styles.container}>
       <Input 
       buttoncolor= "red"
       buttontitle= "ADD"
       onChangeText={(text)=> setText (text)}
       onhandlerbutton={onAddEvent}
       placeholder="ingrese un texto"
       value={text}
       />
      <Events events={events} onSelectItem={onHandlerEvent} />

      <CustomModal
      modalVisible={modalVisible}
      animationType="slide"
      onCancel={onHandlerCancelModal}
      onDelete={onHandlerdelete}
      selectedEvent={selectedEvent}        
      />

      </View>
       
  );
}

