import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CustomButton({ children,onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ?
                        [styles.ButtonInnerContainer, styles.pressed]
                        : styles.ButtonInnerContainer
                }
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,

    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    ButtonInnerContainer: {
        paddingVertical: 8,
    },
    pressed: {
        opacity: 0.5
    }
})
