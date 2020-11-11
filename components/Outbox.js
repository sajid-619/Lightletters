import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import { Card, CardItem, Thumbnail, Left, Body, Button } from 'react-native-element';

class Outbox extends Component {
  render() {
    return (
      <View></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  },

  card: {
    height: 350,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    borderRadius: 5
  },

});


export default Outbox = createStackNavigator({

  Outbox: {
    screen: Outbox,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Outbox",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});