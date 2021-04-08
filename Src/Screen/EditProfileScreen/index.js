import React, { Component } from 'react';
import { Text, Icon, Container, Content,Header,Body } from 'native-base';
import  ListComponent  from '../../Component/List/ListComponent';
import headerStyle from '../../Config/Styles/headerStyle';
import ProfileMenuData from '../../Global/SampleData/ProfileMenuData';
import ListItem from './Components/ListItem';
import { StyleSheet,View } from 'react-native';

import MainHeader from "./component/MainHeader";
import MidSection from "./component/MidSection";
import MyBody from "./component/MyBody";


export default class EditProfileScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="people-outline" style={{ fontSize: 20, color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MainHeader />
        <MidSection />
        <MyBody />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});