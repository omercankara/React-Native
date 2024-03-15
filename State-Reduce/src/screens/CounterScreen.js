import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useReducer } from 'react'
import counterReducer from '../reducer/counterReducer'



export default function CounterScreen() {
    // const [counter, setCounter] = useState(1)
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return (
        <View>
            <Button title="Arttır" onPress={() => {
                dispatch({ type: 'increment', payload: 1 })
                // setCounter(counter + 1)
            }} />

            <Button title="Azalt" onPress={() => {
                dispatch({ type: 'decrement', payload: -1 })
                // setCounter(counter - 1)
            }} />
            <Text>{state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})