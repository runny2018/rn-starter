import React, {useState} from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const ColorSquareScreen = () => {
    const [redValue, setRedValue]=useState(0)
    const [greenValue, setGreenValue]=useState(0)
    const [blueValue, setBlueValue]=useState(0)
    
    return (
        <View>
            <Text>Red</Text>
            <Button
                title="More Red"
                onPress={()=>{
                    if (redValue<=250){
                        setRedValue(redValue+5)
                    }
                }}
            />
            <Button
                title="Less Red"
                onPress={()=>{
                    if (redValue>=5){
                        setRedValue(redValue-5)
                    }      
                }}
            />

            <Text>Green</Text>
            <Button
                title="More Green"
                onPress={()=>{
                    if (greenValue<=250){
                        setGreenValue(greenValue+5)
                    }
                    
                }}
            />
            <Button
                title="Less Green"
                onPress={()=>{
                    if (greenValue>=5){
                        setGreenValue(greenValue-5)
                    }
                }}
            />

            <Text>Blue</Text>
            <Button
                title="More Blue"
                onPress={()=>{
                    if (blueValue<=250){
                        setBlueValue(blueValue+5)
                    }
                    
                }}
            />
            <Button
                title="Less Blue"
                onPress={()=>{
                    if (blueValue>=5){
                        setBlueValue(blueValue-5)
                    } 
                }}
            />

            <View style={{height:100, width:100, backgroundColor:`rgb(${redValue}, ${greenValue}, ${blueValue})`}} />

            
        </View>
    );
}



const styles = StyleSheet.create({

})

export default ColorSquareScreen