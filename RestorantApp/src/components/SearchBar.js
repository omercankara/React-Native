import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
export default function searchBar({term, onTermChange,onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign style={styles.iconStyle} name="search1" size={30} color={"black"}></AntDesign>
            <TextInput   
            onChangeText={onTermChange}     
            onEndEditing={onTermSubmit} 
            value={term}
            autoCorrect={false} 
            autoCapitalize='none' 
            placeholder='Ara' 
            style={styles.inputStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor:'lightgray',
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        borderRadius:20,
        height:50

    },
    iconStyle: {
        marginHorizontal:15,
    },
    inputStyle:{
        flex:1,
        fontSize:20,
       
    }
})