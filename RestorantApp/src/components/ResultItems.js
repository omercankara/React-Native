import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetails({ result }) {
    return (
        <View style={styles.container}  >
            <Image style={styles.Image} source={result.image_url ? { uri: result.image_url }:null} />
            <Text style={styles.restoranName}>{result.name}</Text>
            <Text>{result.rating} Yıldızlı Restoran {result.review_count} Değerlendirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    restoranName:{
        fontSize:20,
        fontWeight:'bold',
        color:'gray'
    },
    container:{
        marginLeft:15,
    },
    Image: {
        width:250,
        height:120,
        borderRadius:10,
        marginBottom:10
    },
})