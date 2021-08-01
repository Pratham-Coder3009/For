import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default class Screen3 extends Component {
  goToScreen1 = () => {
    this.props.navigation.navigate('Screen1');
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.goToScreen1();
          }}>
          <Image
            source={require('../assets/Back.png')}
            style={{ height: 40, width: 55, marginTop: 2, marginLeft: 10 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 5,
            marginLeft: 110,
            fontSize: 25,
            color: 'green',
            fontWeight: 'bold',
          }}>
          {' '}
          Screen 3{' '}
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginLeft: 130,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Contact
        </Text>
        <Text>
          CONTACT helps us to see all the saved numbers in our phone. It helps
          us to see the saved numbers in our phone. Here we can save a new
          contact or editing something in existing contact. AND WE CAN MAKE CALL
          FROM HERE ALSO.
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginLeft: 130,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          संपर्क
        </Text>

        <Text
          style={{
            marginTop: 10,
          }}>
          संपर्क आपको अपने मोबाइल के सारे नंबर को सहेज किये हुए नंबर को देखने
          में मदद करता है| यहाँ पर हमलोग नए नंबर को सहेज भी कर सकते है| और हमलोग
          यहाँ से कॉल भी लगा सकते है|
        </Text>

        <Text
          style={{
            marginTop: 30,
            marginLeft: 130,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Phone
        </Text>

        <Text>
          PHONE helps us to make calls. We will have all the list of called or
          recieved numbers. We can call by clicking on the number that we have
          to call. TO ANSWER CALL "GREEN BUTTON", TO REJECT CALL "RED BUTTON".
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginLeft: 130,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          फ़ोन
        </Text>

        <Text>
          फ़ोन कॉल लगाने में मदद करता है| यहाँ पर आपको सभी लगाए गए या फिर आये हुए
          कॉल को दिखता है| कॉल लगाने के लिए सिर्फ उस नंबर को दबाते ही कॉल लग
          जायेगा| कॉल उठाने के लिए हरा बटन और अस्वीकार करने के लिए लाल बटन है|
        </Text>

        <Text
          style={{
            marginTop: 30,
            marginLeft: 120,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Whatsapp
        </Text>

        <Text>
          WHATSAPP helps us to send messages, documents, contact etc to any
          person. We can chat to a person, or in a group. We can make video
          calls and voice call by clicking on video or voice call icon that
          appears in top-right corner of the person.
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginLeft: 130,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Camera
        </Text>

        <Text>
          CAMERA enables us to take photos and videos. Here we can take photo or
          selfie. There are many other styles available like slow motion,
          panorama etc.
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 70,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Doctor Consultation
        </Text>

        <Text>
          DOCTOR CONSULTATION helps us to consult online with the doctor. Here
          we can take appointments of the doctor and through the video call we
          can consult with them. Apollo, Netmeds, Pharmeasy etc are some apps
          that we can use to consult with a doctor.
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 70,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Emergency Numbers
        </Text>

        <Text>
          EMERGENCY NUMBERS are very useful today. We can call police, ambulance
          etc just from our phone keypad.
        </Text>
        <Text style={{ marginTop: 5 }}>
          Some important Emergency Numbers are:-
        </Text>
        <Text style={{ marginTop: 5 }}>1. Police :- 100</Text>
        <Text style={{ marginTop: 5 }}>2. Fire :- 101</Text>
        <Text style={{ marginTop: 5 }}>3. Ambulance :- 102</Text>
        <Text style={{ marginTop: 5 }}>
          4. Senior Citizen Helpline :- 1091, 1291
        </Text>
        <Text style={{ marginTop: 5 }}>
          5. National Emergency Number :- 112
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 110,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Gallery
        </Text>

        <Text>
          GALLERY is a app that helps us to see all the photos in our phone. We
          can see,edit as well as send any photo by directly clicking on the
          photo for 2 seconds.
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 120,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Clock
        </Text>

        <Text>
          CLOCK is a app that will helps us to set timer, stopwatch or alarm. We
          can directly set any alarm or timer.
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 110,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Youtube
        </Text>

        <Text>
          YOUTUBE is an app that will help us in viewing whatever videos we want
          to watch. We can a channel and then we can upload videos. Here almost
          everything is available. And we can learn or teach from here also.
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 110,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Calender
        </Text>
        <Text>
          CALENDER helps us to know about day and date. We can set important
          days by just clicking in the date in which we have to set a reminder.
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 70,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Google Assistant
        </Text>

        <Text>
          GOOGLE ASSISTANT is a function developed by the Google search engine
          company. It helps us to search anything only by speaking. We can open
          it by pressing the home button for a second.
        </Text>

        <Text
          style={{
            marginTop: 15,
            marginLeft: 100,
            fontSize: 20,
            color: 'green',
            fontWeight: 'bold',
          }}>
          Play Store
        </Text>

        <Text>
          PLAY STORE is an application that helps us to install any app in our
          phone. We can go there and search for the app that we want. And then
          we can install it from there.
        </Text>
      </View>
    );
  }
}
