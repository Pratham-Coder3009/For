import React, { Component } from 'react';
import {
  View,
  Text,
  Stylesheet,
  Header,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class WelcomeScreen extends Component {
  goToScreen1 = () => {
    this.props.navigation.navigate('Screen1', { color: 'blue' });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Basic Smartphone Features </Text>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
          }}>
          <Text style={{ marginTop: 75 }}>
            This app explains about the features of the Smartphone. There will
            be videos and text to describe the neccesary features for elderly
            such as whatsapp,phone, speeddials, etc.
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 75 }}>
            यह एप्लीकेशन आपको मोबाइल के मौलिक विशेषताएं का ज्ञात कराती है| यहाँ
            पर वीडियो और संवाद द्वारा आवश्यक विशेषताएं ( व्हाट्सप्प, वार्तालाप,
            संगीत आदि ) समझाई जाती है|
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.goToScreen1();
          }}>
          <Text> Continue </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8BE8F',
    fontSize: 20,
  },
  title: {
    flex: 0.01,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  button: {
    flex: 0.1,
    marginTop: 225,
    marginLeft: 250,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
