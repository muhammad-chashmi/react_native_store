import React, { Component } from 'react';
import {View,Text,Icon, Container, Content,Header, Body} from 'native-base';
import {Button } from 'react-native';
import SpecialSlider from './Components/SpecialSlider';
import Categories from './Components/Categories';
import allStyle from '../../Config/Styles/allStyle';
import headerStyle from '../../Config/Styles/headerStyle';

export default  class HomeScreen extends Component {
  
  static navigationOptions={
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-home" style={{fontSize: 20,color:tintColor}}/>
    )
  }

  render() {
    return (
     <Container>
       <Header style={headerStyle.container}>
         <Body style={headerStyle.contentContainer}>
           <Text style={[headerStyle.title , headerStyle.contentColor]}>
             فروشگاه  آنلاین
           </Text>
         </Body>
       </Header>
        <Content>
        <Text style={allStyle.mainTitle}> پیشنهاد ویزه</Text>
        <SpecialSlider />
        <Text style={allStyle.mainTitle}> دسته بندی محصولات</Text>
        <Categories/>
      </Content>
     </Container>
    );
  }
}
