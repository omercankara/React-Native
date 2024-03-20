import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function BlogPostForm({ onSubmit, editValue, isEditable }) {
    const [title, setTitle] = useState(editValue ? editValue.title : "")
    const [content, setContent] = useState(editValue ? editValue.content : "")
    return (
        <View style={styles.Container}>
            <Text style={styles.label}>Set A Title</Text>
            <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} value={title} />

            <Text style={styles.label} >Set A Content</Text>
            <TextInput onChangeText={(text) => setContent(text)} value={content} style={styles.input} />

            <TouchableOpacity style={styles.ButtonMain} onPress={() => onSubmit(title, content)}>
                <View style={styles.ButtonView}>
                    {isEditable ? <Text style={styles.ButtonText}>Update</Text> : <Text style={styles.ButtonText}>Save</Text>}




                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 10,
        padding: 5,
        height: "100%",
        backgroundColor: "darkred" //hotpink
    },
    label: {
        fontSize: 40,
        color: "white",
        marginLeft: 10
    },

    input: {
        marginBottom: 15,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
        padding: 20,
        fontSize: 30,
        color: "aqua",
        fontWeight: "bold"
    },
    ButtonMain: {
        padding: 10
    },
    ButtonView: {
        backgroundColor: "darkorange",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    ButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",

    }

})