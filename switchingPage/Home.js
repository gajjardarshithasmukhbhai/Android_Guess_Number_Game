import React from 'react'
import {
    TouchableOpacity, View, ImageBackground,
    Modal, Text, StyleSheet,
    Dimensions, TextInput,
    Alert,
    Animated,
    Easing,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animate from 'react-native-animatable';
import { firebaseConfig } from '../config';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);
import AsyncStorage from '@react-native-community/async-storage';
const window = Dimensions.get("window");
Sound.setCategory('Playback');
// setTimeout(() => {
//     var whoosh = new Sound('live_the_moment.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             console.log('failed to load the sound', error);
//             return;
//         }
//         // loaded successfully
//         console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

//         // Play the sound with an onEnd callback

//         whoosh.play((success) => {
//             if (success) {
//                 console.log('successfully finished playing');
//             } else {
//                 console.log('playback failed due to audio decoding errors');
//             }
//         });

//     });
// }, 1);

class AppHome extends React.Component {

    render() {
        return (
            <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <View>
                        <Text style={style.Heading} onPress={() => {
                            whoosh.pause();
                        }}>Guess My Number
                    </Text>
                        {/* <ActivityIndicator size={} /> */}
                    </View>
                    {/* zoomInDown */}
                    <Animate.View animation="zoomInDown" duration={2800} iterationCount="infinite">
                        <Text style={style.Heading}> ?</Text>
                    </Animate.View>

                </View>
                <View>
                    <Text style={style.subHeading}>Darshit Gajjar</Text>
                </View>
                <View animation="zoomInDown" duration={10000}>
                    <Image
                        source={require("../assets/images/Logo.png")}
                        style={{ marginTop: 30, alignSelf: "center" }}
                    />
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    {/* 1 Google button */}
                    {/* marginVertical: window.width - 240, */}
                    <View>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => {

                                this.props.navigation.navigate("Home");
                            }}>
                            <View style={style.Googlesignin}>
                                <View style={{ margin: 8 }}>
                                    <Image source={require("../assets/images/google.png")} style={{ width: 33, height: 33 }} />
                                </View>
                                <View style={{ backgroundColor: "#E91E63", height: 50, width: window.width - 120, alignSelf: "flex-end", borderTopRightRadius: 5, borderBottomRightRadius: 5, marginVertical: window.width - 410 }}>
                                    <Text style={{ fontFamily: "Roboto-Black", alignSelf: "center", marginTop: 8, fontSize: 20, color: "white" }}>Google signIn</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            console.log("MOM");
                        }}>
                            {/* 2 faceBook Button */}
                            <View style={style.FaceBooksignin}>
                                <View style={{ margin: 8 }}>
                                    <Image source={require("../assets/images/facebook.png")} style={{ width: 33, height: 33 }} />
                                </View>
                                <View style={{ marginVertical: window.width - 410 }}>
                                    <Text style={{ fontFamily: "Roboto-Black", alignSelf: "center", marginTop: 8, fontSize: 20, color: "#E91E63", marginLeft: 65 }}>FaceBook signIn</Text>
                                </View>
                            </View>
                            {/* End button fb */}
                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    Heading: {
        fontFamily: "RosewoodStd-Regular",
        fontSize: 32,
        color: "#E91E63",
        alignSelf: "center",
        marginTop: 80,

    },
    subHeading: {
        fontFamily: "SirinStencil-Regular",
        fontSize: 22,
        alignSelf: "center",
        color: "grey"
    },
    Googlesignin: {
        // marginVertical: window.width - 240,
        marginTop: 110,
        width: window.width - 40,
        height: window.height - 590,
        borderRadius: 6,
        borderWidth: 1,
        elevation: 2,
        borderColor: "#E91E63",
    },
    FaceBooksignin: {
        marginTop: 20,
        width: window.width - 40,
        height: window.height - 590,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E91E63",
        elevation: 2
    }
})
export default AppHome;