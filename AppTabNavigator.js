import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createSwitchNavigator({
  EmergencyNumbers :{
    navigationOptions :{
      tabBarLabel : "EmergencyNumbers",
    }
  },
  Phone :{
    navigationOptions : {
      tabBarLabel : "Phone",
    }
  },
  WhatsApp :{
    navigationOptions : {
      tabBarLabel : "WhatsApp",
    }
  },
  Contacts:{
    navigationOptions:{
      tabBarLabel:"Contacts",
    }
  },
  DoctorConsultation:{
    navigationOptions:{
      tabBarLabel:"Doctor Consultation",
    }
  },
  Camera:{
    navigationOptions:{
      tabBarLabel:"Camera",
    }
  },
  Gallery:{
    navigationOptions:{
      tabBarLabel:"Gallery",
    }
  },
})