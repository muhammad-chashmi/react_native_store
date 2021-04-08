import React, { Component } from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import allStyle from '../../Config/Styles/allStyle';
import Colors from '../../Config/Styles/Colors';
import { View, Text, Card, CardItem, Body, Content, Button } from 'native-base';
import UserData from '../../Global/SampleData/UserData';
import PayPortData from '../../Global/SampleData/PayPortData';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FinalBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPayportId: null
    };
  }

  renderPayPortItem(index, item) {
    const { selectedPayportId } = this.state;
    let itemStyle = null;
    if (item.id == selectedPayportId) {
      itemStyle = styles.selectedPayport;
    }

    return (
      <TouchableOpacity key={index} activeOpacity={0.8} style={[styles.PayPortItem, itemStyle]} onPress={() => {
        this.setState({
          selectedPayportId: item.id
        })
      }}>
        <Image style={styles.PayPortImage} source={{ uri: item.imagePath }}></Image>
        <Text style={styles.PayPortText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  render() {

    const priceData = this.props.navigation.getParam("priceData");
    return (
      <Content>
        <View style={styles.comtainer}>
          <View style={styles.cartCotainer}>
            <Card>
              <CardItem>
                <Text style={styles.headerTitle}>User Info</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> provice </Text>
                    <Text style={styles.labelText}> {UserData.provice} </Text>
                  </View>
                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> city </Text>
                    <Text style={styles.labelText}> {UserData.city} </Text>
                  </View>
                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> address </Text>
                    <Text style={styles.labelText}> {UserData.address} </Text>
                  </View>
                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> phone </Text>
                    <Text style={styles.labelText}> {UserData.phone} </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View>

          <View style={styles.cartCotainer}>
            <Card>
              <CardItem>
                <Text style={styles.headerTitle}>Cost of product</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> product count: </Text>
                    <Text style={styles.labelText}> {priceData.productCount} </Text>
                  </View>
                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> total cost: </Text>
                    <Text style={styles.labelText}> {priceData.totalPrice} </Text>
                  </View>

                  <View style={styles.labelCotainer}>
                    <Text style={[styles.labelText, { color: Colors.general.green }]}> total cost)(tax): </Text>
                    <Text style={styles.labelText}> {priceData.totalPrice + ((priceData.totalPrice / 100) * 9)} </Text>
                  </View>

                </Body>
              </CardItem>
            </Card>
          </View>

          <View style={styles.cartCotainer}>
            <Card>
              <CardItem>
                <Text style={styles.headerTitle}>Payment Methods</Text>
              </CardItem>
              <CardItem>
                <Body style={styles.PayPortItemContiner}>
                  {
                    PayPortData.map((index, item) => {
                      return this.renderPayPortItem(item, index)
                    })
                  }
                </Body>
              </CardItem>
            </Card>
          </View>
        </View>
        <View>
          <Button full success onPress={() => {
            const { navigate } = this.props.navigation;

            if (this.state.selectedPayportId != null) {
              navigate("PayCallBack", {
                result: "ok"
              });
            }else{
              alert("please select payment method");
            }


          }} >
            <Text style={allStyle.text}> pay and buy</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  comtainer: {
    margin: 10
  },
  cartCotainer: {
    flex: 1,
    marginTop: 10
  },
  headerTitle: {
    ...allStyle.text,
    fontSize: 20,
    color: Colors.general.green
  },
  labelCotainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labelText: {
    ...allStyle.text,
    fontSize: 13,
    marginRight: 10
  },
  PayPortItemContiner: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  PayPortItem: {
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 15,
    marginRight: 2

  },
  PayPortImage: {
    width: 70, height: 70
  },
  PayPortText: {
    ...allStyle.text,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  selectedPayport: {
    backgroundColor: Colors.general.green
  }
})

export default FinalBuy;