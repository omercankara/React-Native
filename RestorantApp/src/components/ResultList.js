import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultItems from './ResultItems'
import { useNavigation } from '@react-navigation/native'

export default function ResultList({ results, title }) {
    const navigation  = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("ResultDetailsScreen",{id:item.id})
                        }}>
                            <ResultItems result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 40

    },

    title: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 10,
        fontWeight: 'bold'
    }
})