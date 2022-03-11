import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { useState } from 'react';

export default function Form({ addHandler }) {
  const [text, setTextValue] = useState('');

  const onChange = (text) => {
    setTextValue(text);
  };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChange} placeholder={'New task'} />
      <Button title="Add new task" onPress={() => addHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'green',
    marginHorizontal: '20%',
    marginVertical: 30,
    width: '60%',
  },
});
