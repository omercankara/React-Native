import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Information({ title, description, imageSource }) {
    return (
        <View>
            <Image style={styles.img} source={imageSource} />
            <View style={styles.descTitle}>
                <Text style={styles.Title}>{title}</Text>
                <Text style={styles.Desc}>{description}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%'
    },
    Title:{
        fontSize:30
    },
    Desc:{
        fontSize:20
    },
    descTitle:{
        alignItems:'center',
        paddingVertical:20,
        
    }

})