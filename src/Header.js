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
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Todo list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});