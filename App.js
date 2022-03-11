import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Platform,
  FlatList,
} from 'react-native';
import Header from './src/Header';
import ListItem from './src/ListItem';
import Form from './src/Form';
import { useState } from 'react';

export default function App() {
  const [listOfItems, steListOfItems] = useState([
    { text: 'Buy milk', key: '1' },
    { text: 'Wash my car', key: '2' },
    { text: 'Buy potato', key: '3' },
    { text: 'Kill moskalya', key: '4' },
  ]);

  const addHandler = (text) => {
    steListOfItems((list) => {
      return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list];
    });
  };

  const deleteHandler = (key) => {
    steListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />}
        />
      </View>
    </View>
  );
}
