import React from 'react';
import {
    View, StyleSheet,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
const window = Dimensions.get('window');
const Card = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={{ ...style.card, ...props.style, }}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>

    );

};
const style = StyleSheet.create({
    card: {
        backgroundColor: "white",
        elevation: 7,
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center",
        width: "92%",
        height: window.height / 2 + 30,
        marginTop: 20,
        elevation: 7

    }
})
export default Card;
// Note:
//jyare tamare card ak potano ak custom component te design karo
//and tene tame import karavo and te ne pehla App.js na content ma
// as parent component trike rakho tyare card ni adar no content jato
// rese te na jay ena mate tame jo {props.children} karo to all content te 
// avi jase
