import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>


              <View style={{ marginLeft: 10 }}>

                <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
                  Adam Smith
                </Text>

              </View>



            <View style={styles.navSectionStyle}>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Inbox')}>
                <Icon name='account' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Inbox</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Outbox')}>
                <Icon name='clipboard-text' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle}>Outbox</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Sent')}>
                <Icon name='animation' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle}>Sent</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Setting')}>
                <Icon name='rss' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Setting</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('Logout')}>
                <Icon name='application' size={iconSize} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Logout</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
       </View> 
    )
            }
  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
  
    navItemStyle: {
      padding: 15,
      marginLeft: 20,
  
    },
    navSectionStyle: {
      marginLeft: 20,
    },
  
    drawerMenu: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'trans',
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      backgroundColor: '#E0E0E0',
      color: '#003759'
    }
})