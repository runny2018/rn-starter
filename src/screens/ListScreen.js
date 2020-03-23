import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age:"43"},
        { name: "Friend #2", age:"45" },
        { name: "Friend #3", age:"49"},
        { name: "Friend #4", age:"40" },
        { name: "Friend #5", age:"32" },
        { name: "Friend #6", age:"19" },
        { name: "Friend #7", age:"43" },
        { name: "Friend #8", age:"26" },
        { name: "Friend #9", age:"16" },
        
    ]
    return (     
            <FlatList
                //or you can use keyExtractor={friend=>friend.name} (for the purpose of keys)
                //use horizontal for a horizontal scrolling flatlist
                keyExtractor={friend=>friend.name}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={friends}
                renderItem={({ item }) => {
                    return <Text>{item.name} - age: {item.age} </Text>
                }}
            />

    );
}

const styles = StyleSheet.create({

})

export default ListScreen