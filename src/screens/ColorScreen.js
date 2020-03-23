import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, FlatList } from 'react-native'

const ColorScreen = () => {

    const [colors, setColors]=useState([])
    console.log(colors)

    return (
        <View>
            <Button
                title="Add a color"
                onPress={()=>{
                    setColors([...colors, rgbGenerate()])
                    
                }}
            />
            
            <FlatList
                keyExtractor={item=>item}
                data={colors}
                renderItem={({item})=>{
                    return <View style={{height:100, width:100, backgroundColor:item }}></View>
                }}
            />

        </View>
    )
}

const rgbGenerate = () =>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)

    return `rgb(${red}, ${green}, ${blue})`    //we are returning a template string

}


const styles = StyleSheet.create({

})

export default ColorScreen