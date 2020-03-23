import React, {useState} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import ColorCounter from '../components/ColorCounter'

//ColorCounter(the component) is connected to this screen (ColorSquareScreen2)

const COLOR_INCREMENT=5

const ColorSquareScreen2 = () => {
    const [red, setRed]=useState(0)
    const [green, setGreen]=useState(0)
    const [blue, setBlue]=useState(0)
    
    

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={()=>{
                    //you know the drill of putting if statements, right??
                    setRed(red+COLOR_INCREMENT)
                }}
                onDecrease={()=>{
                    setRed(red-COLOR_INCREMENT)
                }}
            />
            <ColorCounter 
                color="Green"
                onIncrease={()=>{
                    setGreen(green+COLOR_INCREMENT)
                }}
                onDecrease={()=>{
                    setGreen(green-COLOR_INCREMENT)
                }}
            />
            <ColorCounter 
                color="Blue"
                onIncrease={()=>{
                    setBlue(blue+COLOR_INCREMENT)
                }}
                onDecrease={()=>{
                    setBlue(blue-COLOR_INCREMENT)
                }}
            />
            <View style={{height:200, width:200, backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default ColorSquareScreen2