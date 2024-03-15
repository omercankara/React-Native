import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ColorSettings({
    colors,
    onRedIncrease,
    onRedDecrease,
    onBlueDecrease,
    onBlueIncrease,
    onGreenDecrease,
    onGreenIncrease
}) {
    return (
        <View>
            {colors.map((color, index) => (
                <Text key={index}>{color}</Text>
            ))}
            <View>
                <Button
                    style={styles.btn}
                    title={`${colors[1]} Arttır`}
                    onPress={() => {
                        onRedIncrease(20)
                    }}
                />
                <Button
                    style={styles.btn}
                    title={`${colors[1]} Azalt`}
                    onPress={() => {
                        onRedDecrease(20)
                    }}
                />

                <Button
                    style={styles.btn}
                    title={`${colors[0]} Arttır`}
                    onPress={() => {
                        onBlueIncrease(20)
                    }}
                />

                <Button
                    style={styles.btn}
                    title={`${colors[0]} Azalt`}
                    onPress={() => {
                        onBlueDecrease(-20)
                    }}
                />

                <Button
                    style={styles.btn}
                    title={`${colors[2]} Arttır`}
                    onPress={() => {
                        onGreenIncrease(20)
                    }}
                />


                <Button
                    style={styles.btn}
                    title={`${colors[2]} Azalt`}
                    onPress={() => {
                        onGreenDecrease(-20)
                    }}
                />


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginVertical: 40,
        marginBottom: 20
    }
})
