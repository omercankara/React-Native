import { StyleSheet, Text, Alert, Modal, Button, Pressable, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'


export default function Courseİnput({ visible,onAddCourse,onCancelled }) {
    const [courses, setCourses] = useState('')
    setCourseİnputHandler = (enteredText) => {
        setCourses(enteredText)
    }
    const addCourseHandler = () => {
        onAddCourse(courses)
        setCourses('')
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!visible);
            }}>

            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../../assets/favicon.png')} />
                <TextInput value={courses} onChangeText={setCourseİnputHandler} style={styles.textinput} placeholder="Add New Course"></TextInput>
                <Text style={styles.modalText}></Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Ekle" onPress={addCourseHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="İptal Et" color="red" onPress={onCancelled}        ></Button>
                    </View>
                </View>
            </View>


        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: 120,
        height: 120,
        margin: 20
    },
    textinput: {
        borderWidth: 2,
        width: '100%',
        height:80,
        fontWeight:'bold',
        fontSize:20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    button: {
        marginHorizontal: 10,
        width: 100
    }
});
