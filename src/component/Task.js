import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Task = (props) => {

    //TO-DO : key has to be added to list !!!
    var timeLoop = [];

    for (let i = 0; i < props.podoCount; i++) {
        timeLoop.push(
            <MaterialCommunityIcons name="timer-sand-full" color='#ADE' size={30} />
        );
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text numberOfLines = {2} style={styles.itemText}>{props.text}</Text>
                <View style={styles.square}><Text>{props.podoCount}</Text></View>
            </View>
            <View style={styles.itemTimerSandFull}>{timeLoop}</View>
            <MaterialCommunityIcons style={styles.itemTimerSandFull} name="play-circle-outline" color='#ADE' size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        width: 350,
        height: 150
    },
    itemTimerSandFull: {
        paddingTop: 10,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: "flex-start",
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "flex-start",
        flexWrap: 'wrap',
    },
    square: {
        width: 20,
        height: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        opacity: 0.3,
        paddingLeft: 4,
        marginLeft: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#55BCF6',
    },
    itemText: {
        flexDirection: 'column',
        flex:1,
        alignItems: "flex-start",
        fontSize: 17,
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