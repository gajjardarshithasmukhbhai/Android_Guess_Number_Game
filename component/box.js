import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class Box extends React.Component {
    render() {
        return (

            <View style={style.root}>
                {this.props.children}
            </View>
        )
    }
}
let style = StyleSheet.create({
    root: {
        backgroundColor: "white",
        elevation: 7,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        margin: 10,
        width: 190,
        height: 125,
        borderRadius: 12
    }
})