import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Screen1 extends Component {
  goToScreen1 = ()=>{
    this.props.navigation.navigate('Screen1');
  }

  goToScreen3 = ()=>{
    this.props.navigation.navigate('Screen3');
  }
  render() {
    return (
     <View>

      <Text
        style = {{marginTop : 5, marginLeft:110, fontSize : 25, color : "green", fontWeight : "bold"}}> Screen 2 </Text>

      <TouchableOpacity
       onPress = {()=>{
        this.goToScreen3();
      }}>
      <Image 
        source = {require('../assets/Clock.jpg')}
        style = {{width : 100, height:110,marginBottom : 105,marginTop : 20,  marginLeft:215}}
        />
        <Text
        style = {{marginTop:-110, marginLeft:230, fontSize:20, color : 'green'}}> Clock </Text>
      </TouchableOpacity>


    <TouchableOpacity
     onPress = {()=>{
        this.goToScreen3();
      }}>
      <Image
      source = {require('../assets/Gallery.jpg')}
      style = {{width : 95, height: 95, marginTop: -130, marginLeft : 1}}
      />
      <Text style = {{marginTop : 5, marginLeft : 15, fontSize:20, color:'green'}}>Gallery</Text>
    </TouchableOpacity>


      <TouchableOpacity
       onPress = {()=>{
        this.goToScreen3();
      }}>
        <Image
         source = {require('../assets/calendar.jpg')}
         style = {{width : 100, height:100, marginTop : 30, marginLeft:220 }}
         />
         <Text
         style = {{marginTop:-5, marginLeft:236, fontSize:20, color:'green'}}>Calendar</Text>
       </TouchableOpacity>
  

   <TouchableOpacity
    onPress = {()=>{
        this.goToScreen3();
      }}>
     <Image source = {require('../assets/PlayStore.png')}
     style = {{marginTop:30, marginLeft:226, width:95, height:95}}
     />
     <Text style = {{marginTop : -5, marginLeft:250, fontSize:20, color:'green'}}> Play</Text>
     <Text style = {{marginTop: -7, marginLeft:240, fontSize:20, color:'green'}}> Store </Text>
   </TouchableOpacity>


   <TouchableOpacity
    onPress = {()=>{
        this.goToScreen3();
      }}>
     <Image source = {require('../assets/GoogleAssitant.jpg')}
     style = {{marginTop:-130, marginLeft:5, width:95, height:95}}
     />
     <Text style = {{marginTop:-5, marginLeft:15, fontSize:20, color:'green'}}> Google </Text>
     <Text style = {{marginTop:-7, marginLeft:5, fontSize:20, color:'green'}}> Assistant </Text>
   </TouchableOpacity>


   <TouchableOpacity
    onPress = {()=>{
        this.goToScreen3();
      }}>
   <Image 
   source = {require('../assets/Youtube.png')}
   style = {{marginTop : -290, marginLeft:5, width:95, height:95}}
   />
   <Text style = {{marginTop:-7, marginLeft:15, fontSize:20, color:'green'}}>Youtube</Text>
   </TouchableOpacity>


   <TouchableOpacity
   onPress = {()=>{
     this.goToScreen1()
   }
 }>
   <Image source = {require('../assets/Back.png')}
   style = {{marginTop:-25, marginLeft:140, width:75, height:40}}
   />
   </TouchableOpacity>
      
      </View>
      
    );
  }
}

