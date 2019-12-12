import React from 'react'
import {
    TouchableOpacity, View, ImageBackground,
    Modal, Text, StyleSheet,
    Dimensions, TextInput,
    Alert,
    ScrollView
} from 'react-native';
const window = Dimensions.get('window');
class Navbar extends React.Component {
    render() {
        return (
            <View style={style.header}>
                <Text style={style.Guess}>Guess the Number</Text>
            </View>
        )
    }
}
export default Navbar;
const style = StyleSheet.create({
    header: {
        elevation: 5,
        width: "100%",
        height: window.height / 6 - 48,
        backgroundColor: "#e91e63"
    },
    Guess: {
        fontSize: 22,
        marginLeft: 20,
        color: "white",
        marginTop: 15,
        fontWeight: '600'
    }

})
