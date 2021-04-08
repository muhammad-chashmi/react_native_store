import React, { Component } from 'react';
import { Text, Icon, Container, Content,Header,Body } from 'native-base';
import  ListComponent  from '../../Component/List/ListComponent';
import headerStyle from '../../Config/Styles/headerStyle';
import ProfileMenuData from '../../Global/SampleData/ProfileMenuData';
import ListItem from './Components/ListItem';

export default class ProfileScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="people-outline" style={{ fontSize: 20, color: tintColor }} />
    )
  }

  render() {
    return (
      <Container>

        <Header style={headerStyle.container}>
          <Body style={headerStyle.contentContainer}>
            <Text style={[headerStyle.title, headerStyle.contentColor]}> Profile</Text>
          </Body>
        </Header>
        <Content>
            <ListComponent data={ProfileMenuData} ListItem={ListItem} />
        </Content>
      </Container>
    );
  }
}
