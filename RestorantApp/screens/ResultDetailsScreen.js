import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Yelp from "../src/api/Yelp"
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

export default function ResultShowScreen({ route }) {
    const id = route.params.id
    const [result, setResult] = useState([])
 
    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, []) //id degişince getResultu çalıştır
  
  
    return (
        <View>
            <Text style={styles.Title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <View style={styles.icon}>
                {
                    result.is_closed ? <AntDesign name="closecircleo" size={34} color="black"></AntDesign> : <MaterialIcons name="delivery-dining" size={34} color="black"></MaterialIcons>
                }
            </View>

            <FlatList
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.Image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Image: {
        height: 180,
        margin: 10,
        borderRadius: 20,
    },
    Title: {
        flexDirection: 'column',
        alignSelf: 'center',
        fontSize: 25,
        marginVertical: 10
    },
    phone: {
        flexDirection: 'column',
        alignSelf: 'center',
        fontSize: 20
    },
    icon:{
        alignSelf:'center'
    }
})