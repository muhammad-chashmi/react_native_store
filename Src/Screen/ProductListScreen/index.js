import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import ProductData from '../../Global/SampleData/ProductData';
import allStyle from '../../Config/Styles/allStyle';
import ListComponent from '../../Component/List/ListComponent';
import ListItem from './Components/ListItem';
import {View, Text,Icon, Content, Header, Right, Container } from 'native-base';
import headerStyle from '../../Config/Styles/headerStyle';

export default class ProductListScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("categotyName", "product ererlist")
    }
  }

  constructor(props) {
    super(props);

  }

  render() {
    const { navigation } = this.props;
    const categotyName = navigation.getParam("categotyName");

    return (
      <Container>
        <Header style={headerStyle.container}>
          <Right style={headerStyle.contentContainer}>
            <Icon 
            name="arrow-forward"
               style={[headerStyle.icon, headerStyle.contentColor]}
               onPress={()=>{
                 this.props.navigation.pop() 
               }}
            />
            <Text style={[headerStyle.title, headerStyle.contentColor]}>
              لیست محصولات {categotyName}
           </Text>
          </Right>
        </Header>
        <Content>
          <Text style={allStyle.mainTitle}> محصولات {categotyName}</Text>

          <ListComponent data={ProductData} ListItem={ListItem} />
        </Content>
      </Container>


    );
  }
}
