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
    ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';
class Aboutus extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: 'https://darshitportfolio.web.app/' }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Aboutus;