import {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';

const TodoListScreen = () => {
  const [todoListData, setTodoListData] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handChangeText = text => {
    setTodoText(text);
  };

  const handleButtonPress = () => {
    if (todoText.trim().length == 0) {
      return;
    }
    setTodoListData(value => value.concat({text: todoText}));
    setTodoText('');
    console.log(todoListData);
  };

  const handerRenderListItem = ({item}) => {
    return <Text> {item.text} </Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View>
          <TextInput
            placeholder="Escribe tu palabra"
            style={styles.textInput}
            value={todoText}
            onChangeText={handChangeText}
          />
          <Button title="Enter" onPress={handleButtonPress} />
        </View>
        <View>
          <FlatList
            keyExtractor={({text}) => text}
            data={todoListData}
            renderItem={handerRenderListItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbfb',
  },
  textInput: {
    backgroundColor: '#F5F5F5',
    color: '#212121',
    fontSize: 16,
    marginBottom: 16,
  },
  viewContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default TodoListScreen;
