import React, { Component } from 'react';
import {
  TouchableOpacity, View, ImageBackground,
  Modal, Text, StyleSheet,
  Dimensions, TextInput,
  Alert,
  Animated,
  Easing,
  ScrollView
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Card from './component/card';
import Box from './component/box';
import buttonStyle from './ButtonStyle/buttonStyle';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
//start the width in this point yes brother
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import StartGame from './switchingPage/startGame';
import AppHome from './switchingPage/Home';
// import { setJS0ExceptionHandler, getJSExceptionHandler } from 'react-native-exception-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation-drawer';
const window = Dimensions.get('window');
class Darshit extends React.Component {
  constructor() {
    super();
    this.state = {
      Header: true,
      value: "",
      Confirm: false,
      selectedValue: ""
    }
    this.changeText = this.changeText.bind(this);
    this.ConfirmUser = this.ConfirmUser.bind(this);
    this.BoxView = this.BoxView.bind(this);
  }
  changeText = (NumberValue) => {
    if (parseInt(NumberValue) > 0) {
      this.setState({
        value: parseInt(NumberValue.replace(/[^0-9]/g, ""))
      })
    }
    else {
      this.setState({
        value: ""
      })
    }


  }
  ConfirmUser = () => {
    if (this.state.value > 0) {
      this.setState({
        ConfirmUser: true,
        selectedValue: this.state.value,
        value: ""
      })
    }
    else {
      Alert.alert("Number is invalid", "write number between 1 to 99", [{ text: "ok", style: "default" }]);
      this.setState({
        ConfirmUser: false
      })
    }
  }
  BoxView = () => {
    if (this.state.ConfirmUser) {
      return (
        <Box myvalue={this.state.value} kem={`gajjar darshti`}>
          <View style={style.boxView}>
            <View>
              <Text style={{ color: "#0080c0" }}>You Selected</Text>
            </View>
            <View style={style.boxText}>
              <Text style={style.choosenNum}>{this.state.selectedValue}</Text>
            </View>

            <View>
              <TouchableOpacity activeOpacity={0.1} onPress={() => {
                this.props.navigation.navigate("StartGames");
              }}>
                <Text style={{ color: "#ff8040", marginTop: 10 }}>START GAME</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Box>
      )
    }

  }
  reset = () => {
    this.setState({ value: "" })
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={style.gameTextView}>
              <Text style={style.gameText}>Start New Game</Text>
            </View>
            <Card style={style.card}>
              <View>
                <ImageBackground source={require('./assets/images/yoyo.png')} style={style.image} imageStyle=
                  {{ borderRadius: 11, opacity: 0.7 }}>
                  <View style={style.overlay}></View>
                  <Text style={[style.textStyle, { paddingTop: 6 }]} >Select a Number</Text>
                  <TextInput style={style.textInput}
                    placeholder="Number"
                    onChangeText={this.changeText}
                    keyboardType='phone-pad'
                    value={this.state.value}
                    autoCompleteType="off"
                    autoCorrect={false}
                    maxLength={2}
                  />
                </ImageBackground>
                <View style={style.buttonrow}>
                  <LinearGradient colors={["#56CCF2", "#56CCF2", "#2F80ED"]} style={style.button1}>

                    <TouchableOpacity activeOpacity={0.7} onPress={this.ConfirmUser}>


                      <Text style={style.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                  <LinearGradient colors={["#3CA55C", "#00dbde"]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={style.button2}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {
                      this.props.navigation.navigate("Home");
                      this.reset
                    }}>
                      <Text style={style.buttonText}>Reset</Text>
                    </TouchableOpacity>
                  </LinearGradient>

                </View>
              </View>
            </Card>
            {this.BoxView()}
            <View>
              <Text></Text>
            </View>
          </View>
        </ScrollView>
      </View>

    )
  }
}
class Logout extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello Gajjar darshit</Text>
      </View>
    )
  }
}
const switchNavigate = createStackNavigator({
  Home: {
    screen: Darshit,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name="md-menu" size={26} style={{ marginLeft: 16, color: "#ffff" }} onPress={navigation.openDrawer} />,
      headerTintColor: "#ffff",
      title: "Guess the Number",
      headerStyle: {
        backgroundColor: "#e91e63"
      }
    })
  }
})
const switchNavigates = createStackNavigator({
  StartGames: {
    screen: StartGame,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#ffff",
      title: "Guess the Number",
      headerStyle: {
        backgroundColor: "#e91e63"
      },

    })
  }
})

const switchN = createStackNavigator({
  AppHome: {
    screen: AppHome,
    navigationOptions: {
      header: null
    }
  }
})
// , {
//   initialRouteName: "AppHome",//screen mentioned in react navigation
//   transitionConfig: () => ({
//     transitionSpec: {
//       duration: 500,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//     },
//     screenInterpolator: sceneProps => {
//       const { layout, position, scene } = sceneProps;
//       const { index } = scene;

//       const height = layout.initHeight;
//       const width = layout.initWidth;
//       const translateX = position.interpolate({
//         inputRange: [index - 1, index],
//         outputRange: [width, 0],
//       });

//       const opacity = position.interpolate({
//         inputRange: [index - 1, index - 0.99, index],
//         outputRange: [0, 1, 1],
//       });

//       return { opacity, transform: [{ translateX }] };
//     },
//   }),
// })
const drawers = createDrawerNavigator({
  LogIn: {
    screen: switchN,

  },
  Logout: {
    screen: switchNavigates
  },
  After: {
    screen: switchNavigate
  }
},
  {

    drawerBackgroundColor: "#e91e63"
  }
)

const Sw = createSwitchNavigator({
  Drawer: {
    screen: drawers
  }
})
export default createAppContainer(Sw);
//modal ma jyare visiblity apo tyare te modal new te start thase
//so evu nai ke man fave tya modal tya banavi devu :-)
const style = StyleSheet.create({
  boxView: {
    flexDirection: "column",
    padding: 10,
    fontSize: 16,
  },
  choosenNum: {
    fontSize: 23,
  },
  boxText: {
    flexDirection: "row",
    marginTop: 6,
    padding: 8,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#ff0080",
    borderRadius: 12
  },
  choosenText: {
    flexDirection: "row",
    justifyContent: "center",
    margin: window.width / 4 - 40
  },
  WinnerText: {
    fontFamily: "BerkshireSwash-Regular",
    color: "#379bff",
    fontSize: 25
  },
  buttonText: {
    color: "white",
    fontSize: 19
  },
  buttonrow: {
    flexDirection: "row",
    alignSelf: "center"
  },
  button1: {
    backgroundColor: "#ff0080",
    color: "white",
    padding: 10,
    borderRadius: 22,
    elevation: 6,
    marginRight: 100
  },
  button2: {
    backgroundColor: "#ff00ff",
    color: "white",
    padding: 10,
    borderRadius: 22,
    elevation: 6

  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color: "#ff5722",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  card: {
    borderRadius: 12
  },

  textInput: {
    width: 90,
    alignSelf: "center",
    borderBottomWidth: 2,
    borderColor: "#e91e63",
    fontSize: 16,
    paddingTop: 0,
    textAlign: "center",
    color: "#8000ff",
    fontWeight: "bold"
  },

  overlay: {
    backgroundColor: 'transparent',
    opacity: 0.6
  },
  gameText: {
    paddingTop: 10,
    fontSize: 34,
    fontFamily: "Cookie-Regular",
    color: "#e91e63",
  },
  gameTextView: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: window.width - 30,
    height: window.height / 2 - 30,
    resizeMode: "cover",
  }
})