import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Task = (props) => {

    var timeLoop = [];

    for (let i = 0; i < props.podoCount; i++) {
        timeLoop.push(
            <MaterialCommunityIcons name="timer-sand-full" color='#ADE' size={30} />
        );
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text + " " +props.podoCount}</Text>
                {timeLoop}

            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: 350,
        height: 150
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "flex-start",
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        flexDirection: 'row',
        alignItems: "flex-start",
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5, 
    },
})

export default Task;