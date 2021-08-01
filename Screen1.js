import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

export default class Screen1 extends Component {
  goToScreen2 = () => {
    this.props.navigation.navigate('Screen2');
  };

  goToScreen3 = () => {
    this.props.navigation.navigate('Screen3');
  };
  render() {
    return (
      <View>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 110,
            fontSize: 25,
            color: 'green',
            fontWeight: 'bold',
          }}>
          {' '}
          Screen 1{' '}
        </Text>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen3();
          }}>
          <Image
            source={require('../assets/Phone.png')}
            style={{
              width: 100,
              height: 110,
              marginBottom: 100,
              marginTop: 20,
              marginLeft: 215,
            }}
          />
          <Text
            style={{
              marginTop: -110,
              marginLeft: 230,
              fontSize: 20,
              color: 'green',
            }}>
            {' '}
            Phone{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen3();
          }}>
          <Image
            source={require('../assets/Contact.png')}
            style={{ width: 100, height: 110, marginTop: -130, marginLeft: 1 }}
          />
          <Text
            style={{
              marginTop: -10,
              marginLeft: 15,
              fontSize: 20,
              color: 'green',
            }}>
            Contact
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen3();
          }}>
          <Image
            source={require('../assets/Camera.jpg')}
            style={{ width: 100, height: 100, marginTop: 30, marginLeft: 220 }}
          />
          <Text
            style={{
              marginTop: -5,
              marginLeft: 236,
              fontSize: 20,
              color: 'green',
            }}>
            Camera
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen3();
          }}>
          <Image
            source={require('../assets/EmergencyNumber.png')}
            style={{ marginTop: 30, marginLeft: 226, width: 95, height: 95 }}
          />
          <Text
            style={{
              marginTop: -5,
              marginLeft: 220,
              fontSize: 20,
              color: 'green',
            }}>
            {' '}
            Emergency
          </Text>
          <Text
            style={{
              marginTop: -7,
              marginLeft: 230,
              fontSize: 20,
              color: 'green',
            }}>
            {' '}
            Number{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen3();
          }}>
          <Image
            source={require('../assets/DoctorConsultation.jpg')}
            style={{ marginTop: -130, marginLeft: 2, width: 95, height: 95 }}
          />
          <Text
            style={{
              marginTop: -5,
              marginLeft: 15,
              fontSize: 20,
              color: 'green',
            }}>
            {' '}
            Doctor{' '}
          </Text>
          <Text
            style={{
              marginTop: -7,
              marginLeft: -3,
              fontSize: 20,
              color: 'green',
            }}>
            {' '}
            Consultation{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen3();
          }}>
          <Image
            source={require('../assets/Whatsapp.jpg')}
            style={{ marginTop: -290, marginLeft: 10, width: 95, height: 95 }}
          />
          <Text
            style={{
              marginTop: -7,
              marginLeft: 4,
              fontSize: 20,
              color: 'green',
            }}>
            {' '}
            WhatsApp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.goToScreen2();
          }}>
          <Image
            source={require('../assets/Next.png')}
            style={{ marginTop: -25, marginLeft: 140, width: 75, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
