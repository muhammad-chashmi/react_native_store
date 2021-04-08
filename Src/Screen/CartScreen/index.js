import React, { Component } from 'react';
import { Content, View, Text, Icon, Card, CardItem, Body, Button, Picker } from 'native-base';
import allStyle from '../../Config/Styles/allStyle';
import { StyleSheet, Image } from 'react-native';
import Colors from '../../Config/Styles/Colors';
import { connect } from 'react-redux';
import { cartStorage } from '../../Redux/storage'
import { deleteFromCartAction,editProductCountFromCartAction } from '../../Redux/actions/cartAction';
import CartCounter from './Components/CartCounter';

class CartScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <CartCounter tintColor={tintColor} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onValueChange(id,count) {
     const {editProductCountFromCart} =this.props;
     editProductCountFromCart(id,count);
  }

  renderCartItem(index, item) {
    const { id, title, imagePath,price, count ,selectedCount} = item;
    return (
      <Card key={index}>
        <CardItem bordered>
          <Body>
            <View style={styles.cartItemContainer}>
              <View style={[styles.colContainer, { width: '25%' }]}>
                <Image source={{ uri: imagePath }} style={styles.image} />
              </View>
              <View style={[styles.colContainer, { width: '65%' }]}>
                <View>
                  <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.priceMainComtainer}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}> product price </Text>
                    <Text style={styles.priceLabel} >{price}</Text>
                  </View>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}> Total price </Text>
    <Text style={styles.priceLabel} >{price * selectedCount}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Body>
        </CardItem>
        <CardItem footer bordered style={{ justifyContent: 'flex-end' }}>
          <Picker
            note
            mode="dropdown"
            style={styles.pickerCount}
            selectedValue={selectedCount}
            onValueChange={count=>this.onValueChange(id,count)}
          >
            {this.renderProductCountItem(count)}
          </Picker>
          <Icon name="trash" style={styles.trash} onPress={() => { this.props.deleteFromCart(id) }} />

          <Icon name="eye" style={styles.preview} onPress={() => {
            const { navigate } = this.props.navigation;
            navigate("ProductDetails", { productData: item })
          }}
          />
        </CardItem>
      </Card>
    )
  }

  renderProductCountItem(count) {
    let items = [];
    for (let index = 1; index <= count; index++) {
      items.push(<Picker.Item key={index} label={index.toString()} value={index} />)
    }
    return items;
  }

  calculateTotalPrice() {
    const { cart } = this.props;
    let totalPrice = 0;
    cart.map(item => {
      totalPrice += Number(item.price) * Number(item.selectedCount)
    });
    return totalPrice;
  }

  render() {
    const { cart } = this.props;
    const totalPrice = this.calculateTotalPrice();
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>total buy</Text>
          <Text style={styles.totalPriceText}>{totalPrice}</Text>
        </View>
        <Content>
          {
            cart != "" ?
              cart.map((item, index) => {
                return this.renderCartItem(index, item);
              })
              :
              <View style={styles.empetyLabelContainer}>
                <Text style={styles.empetyLabel}>
                  empety cart
    </Text>
              </View>
          }
        </Content>
        <Button full success onPress = {()=>{
          const {navigate} = this.props.navigation;
          navigate("FinalBuy", {
            priceData:{
              productCount: cart.length,
              totalPrice:totalPrice,
            }
          })
        }} >
          <Text style={allStyle.text}> final buy</Text>
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    elevation: 1
  },
  pickerCount: {
    // position:'absolute',  disable for ios
    width: 120
    // left:5    disable for ios
  },
  totalPriceText: {
    ...allStyle.text,
    color: Colors.general.green
  },
  empetyLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  empetyLabel: {
    ...allStyle.text,
    fontSize: 17,
    padding: 50
  },
  priceMainComtainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    marginTop:10
  },
  priceContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceLabel:{
    ...allStyle.text,
    fontSize:13,
    marginRight:10,
    textAlign:'center'
  },
  cartItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85
  },
  colContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  trash: {
    fontSize: 25,
    color: Colors.general.green,
    marginLeft: 10,
    marginRight: 10
  },
  preview: {
    fontSize: 25,
    color: Colors.general.green,
    marginLeft: 10,
    marginRight: 10
  },
})

mapStateToProps = state => ({
  cart: state[cartStorage]
})

mapDispatchToProps = dispatch => ({
  deleteFromCart: productId => dispatch(deleteFromCartAction(productId)),
  editProductCountFromCart:(productId, selectedCount) => dispatch(editProductCountFromCartAction(productId,selectedCount))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);