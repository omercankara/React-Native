import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useReducer } from 'react'
import ColorSettings from "../component/ColorSettings"
import boxReducer from "../reducer/boxReducer"



export default function ChangeColor() {
    const [state, dispatch] = useReducer(boxReducer, { red: 0, green: 0, blue: 0 })
    return (
        <View>
            <ColorSettings colors={['Mavi', 'Kırmızı', 'Yeşil']}
                onRedIncrease={() => {
                    dispatch({ type: 'Change_red', payload: 20 })
                }}

                onRedDecrease={() => {
                    dispatch({ type: 'Change_red', payload: -20 })
                }}

                onBlueIncrease={() => {
                    dispatch({ type: 'Change_blue', payload: 20 })
                }}

                onBlueDecrease={() => {
                    dispatch({ type: 'Change_blue', payload: -20 })
                }}

                onGreenIncrease={() => {
                    dispatch({ type: 'Change_green', payload: 20 })
                }}

                onGreenDecrease={() => {
                    dispatch({ type: 'Change_green', payload: -20 })
                }}
            />

            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />



        </View>
    )
}

const styles = StyleSheet.create({})