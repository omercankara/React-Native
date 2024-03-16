import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
     return (
          <View>
               {/* <View
                style={{width:50,height:50,backgroundColor:'red'}}
           />
           <View
                style={{width:50,height:150,backgroundColor:'green'}}
           />
           <View
                style={{width:50,height:250,backgroundColor:'blue'}}
           /> */}
               <View style={styles.mainView}>
                    <Text style={styles.textMainOne}>1</Text>
                    <Text style={styles.textMainTwo}>2</Text>
                    <Text style={styles.textMainThree}>3</Text>
                    <Text style={styles.textMainFour}>4</Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     mainView: {
          height: "100%",
          padding: 10,
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius: 20,
          position: "relative"
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "flex-start"
          //alignItems:"flex-start"
          //alignItems:"center"
     },
     textMainOne: {
          borderWidth: 2,
          color: "green",
          padding: 20,
          margin: 10,
          borderColor: "red",
          borderRadius: 20,
          position: "absolute",
          top: 0,
          height: 150,
          width: 150,
          backgroundColor:"blue"
          // bottom:0,
          // left:0,
          // right:0
          // flex:1,
          //left:10,
          //right:10,
          // bottom:10
          //marginVertical:30
          //marginHorizontal:30
          //marginVertical:50
          // alignSelf:"center",
     },
     textMainTwo: {
          borderWidth: 2,
          color: "green",
          padding: 20,
          margin: 10,
          borderColor: "green",
          borderRadius: 20,
          position:"absolute",
          bottom:0,
          right:0,
          height:150,
          width:150,
          backgroundColor:"yellow"
          // flex:3
          //marginVertical:30
          //marginHorizontal:30
          //marginVertical:50
     },
     textMainThree: {
          borderWidth: 2,
          color: "green",
          padding: 20,
          margin: 10,
          borderColor: "green",
          borderRadius: 20,
          position: "absolute",
          bottom: 0,
          height: 150,
          width: 150,
          backgroundColor:"green"
          //marginVertical:30
          //marginHorizontal:30
          //marginVertical:50
          // flex:10,
     },
     textMainFour: {
          height:150,
          width:150,
          position:"absolute",
          right:0,
          margin:10,
          borderRadius:20,
          borderWidth:2,
          backgroundColor:"pink"

     }

})