import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from 'firebase';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { Card, CardItem, Body } from "react-native-elements";
import DrawerContainer from './DrawerContainer';
import Inbox from './Inbox';
import Outbox from './Outbox';
import Sent from './Sent';
import Setting from './Setting';
import Logout from './Logout';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

let resizeMode = 'cover';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});

const DashboardStack = createStackNavigator({

  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Home Page",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});


const DrawerStack = createDrawerNavigator({
  Dashboard: { screen: Dashboard },
  Inbox: { screen: Inbox },
  Outbox: { screen: Outbox },
  Sent: { screen: Sent },
  Setting: { screen: Setting },
  Logout: { screen: Logout },
},
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  })
