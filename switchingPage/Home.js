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
import firebase from 'firebase';
// import * as firebase from 'firebase';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
const uuidv1 = require('uuid/v1');
type ErrorWithCode = Error & { code?: string };
var firebaseConfig = {
    apiKey: "AIzaSyD79GDVoLd8A7AJnPYdoNcUsKmbahn3MiI",
    authDomain: "guessmynumber-c1f03.firebaseapp.com",
    databaseURL: "https://guessmynumber-c1f03.firebaseio.com",
    projectId: "guessmynumber-c1f03",
    storageBucket: "guessmynumber-c1f03.appspot.com",
    messagingSenderId: "252313230809",
    appId: "1:252313230809:web:492e389ebe4a1c5fefcdc8",
    measurementId: "G-SWJ30F97T4"
};
type State = {
    error: ?ErrorWithCode,
    userInfo: ?User,
};

GoogleSignin.configure({
    webClientId: '252313230809-u42fpomjtdgmtb8pim36gkirep5ib202.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


console.log("==++", firebase);

const window = Dimensions.get("window");
Sound.setCategory('Playback');
setTimeout(() => {
    var whoosh = new Sound('my_music.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

        // Play the sound with an onEnd callback

        whoosh.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.
                    log('playback failed due to audio decoding errors');
            }
        });

    });
}, 1);

class AppHome extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            imgSrc: "",
            email: ""
        }
        this.googleLogin = this.googleLogin.bind(this);
        this.faceBook = this.faceBook.bind(this);
    }
    componentWillmount() {
        console.log("gajjar how are you");



    }
    componentDidMount() {
        console.log("gajjar->");

        try {
            const userInfo = GoogleSignin.signInSilently();
            // this.setState({ userInfo, error: null });
            userInfo
                .then(ed => {
                    console.log("))-->");
                    console.log("Hello", ed);
                    this.props.navigation.navigate("Home");

                })
                .catch(err => {
                    this.props.navigation.navigate("AppHome");
                });


        } catch (error) {

            console.log(error.message());

        }

    }

    faceBook = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
    googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            if (userInfo) {
                console.log("-->", userInfo);
                let id = uuidv1();
                firebase.database().ref('users/').set({
                    email: "Gajjar Darshit",
                    fname: "123456",
                    lname: "123456"
                }).then((data) => {
                    //success callback
                    console.log('data ', data)
                }).catch((error) => {
                    //error callback
                    console.log('error ', error)
                });

                this.props.navigation.navigate("Home");

            }
        } catch (error) {
            console.log("hello-----------------", error.message);

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }
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
                                this.googleLogin();
                                console.log("kem che dr");
                            }}>
                            <View style={style.Googlesignin}>
                                <View style={{ margin: 8 }}>
                                    <Image source={require("../assets/images/google.png")} style={{ width: 33, height: 33 }} />
                                </View>
                                <View style={{ backgroundColor: "#E91E63", height: 53, width: window.width - 120, alignSelf: "flex-end", borderTopRightRadius: 5, borderBottomRightRadius: 5, marginVertical: -49 }}>
                                    <Text style={{ fontFamily: "Roboto-Black", alignSelf: "center", marginTop: 8, fontSize: 20, color: "white" }}>Google signIn</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            this.faceBook();
                        }}>
                            {/* 2 faceBook Button */}
                            <View style={style.FaceBooksignin}>
                                <View style={{ margin: 8 }}>
                                    <Image source={require("../assets/images/facebook.png")} style={{ width: 33, height: 33 }} />
                                </View>
                                <View style={{ marginVertical: -48 }}>
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
        height: 54,
        borderRadius: 6,
        borderWidth: 1,
        elevation: 2,
        borderColor: "#E91E63",
    },
    FaceBooksignin: {
        marginTop: 20,
        width: window.width - 40,
        height: 54,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E91E63",
        elevation: 2
    }
})
export default AppHome;