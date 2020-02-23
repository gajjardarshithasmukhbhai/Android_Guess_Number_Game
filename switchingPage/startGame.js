import React from 'react';
import {
    TouchableOpacity, Image, TouchableWithoutFeedback,
    View, ImageBackground,
    Modal, Text, StyleSheet,
    Dimensions, TextInput,
    Button,
    Alert,
    Keyboard,
    ScrollView
} from 'react-native';
const window = Dimensions.get('window');

class StartGame extends React.Component {
    render() {
        return (
            <View>
                <Text style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 20,
                    fontSize: 22,
                    color: '#0080ff',
                    fontFamily: 'roboto',
                }}>Oppent's Number</Text>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderWidth: 3,
                    width: 50,
                    height: 50,
                    borderColor: "#ff00ff",
                    alignSelf: "center",
                    borderRadius: 10
                }}>
                    <Text style={{ color: "#ff00ff", fontSize: 25 }}>35</Text>
                </View>
                <View style={{
                    backgroundColor: "white",
                    elevation: 7,
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignSelf: "center",
                    width: "92%",
                    height: window.height / 2 - 260,
                    marginTop: 20,
                    borderRadius: 10,
                    alignContent: "space-between",
                }}>
                    <View>
                        <TouchableOpacity>
                            <Text style={{
                                marginTop: 30,
                                color: '#0080ff',
                                fontSize: 20
                            }}>Lower</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{
                                marginTop: 30,
                                color: '#0080ff',
                                fontSize: 20
                            }}>Greater</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}
export default StartGame;