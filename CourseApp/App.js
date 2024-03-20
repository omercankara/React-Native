import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';
import Courseİnput from './src/Component/Courseİnput';

export default function App() {
  const [modalİsVisible, setModalVisible] = useState(false)
  const [courses, setCourses] = useState([])

  const startModal = () => {
    setModalVisible(true)
  }
  const endModal = () => {
    setModalVisible(false)
  }

  const addCourse = (courseTitle) => {

    setCourses((currentCourses) => [
      ...currentCourses,
      {
        title: courseTitle,
        id: Math.random().toString()
      }
    ])
    endModal()
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>

        <Button
          title="Add Courses"
          color="red"
          onPress={startModal}>
        </Button>

        <Courseİnput
          onAddCourse={addCourse}
          onCancelled={endModal}
          visible={modalİsVisible} />

        <View>
          <FlatList
            data={courses}
            renderItem={({item}) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.title}</Text>
              </View>
            )}
          >
          </FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  courseItem:{
    backgroundColor:'lightgray',
    borderWidth:1,
    margin:10,
    borderWidth:0,
    borderRadius:5

  },
  courseText:{
    fontSize:18,
    padding:8,
    color:'white',
    color:'black',
    fontWeight:'bold'
  }
});
