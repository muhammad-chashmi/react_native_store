const { createNativeWrapper } = require("react-native-gesture-handler");
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon } from 'native-base';

class ListItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //  };
  }

  render() {
    const { id, imagePath, title } = this.props.itemData;
    return (
      <View style={styles.container}>
        <View style={[styles.colContainer, { width: '25%' }]}>
          <Image source={{ uri: imagePath }} style={styles.image} />
        </View>
        <View style={[styles.colContainer, { width: '65%' }]}>
          <Text style={styles.title}> {title} </Text>
        </View>
        <View style={[styles.colContainer, { width: '10%' }]}>
          <Icon name="cart"
            style={styles.cartIcon}
            onPress={() => {
              const { navigate } = this.props.navigation;
              navigate("ProductDetails",
                {
                  productData: this.props.itemData
                }
              )
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 15,
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
  cartIcon: {
    fontSize: 20,
    color: "#fff",
    height: 30,
    width: 30,
    backgroundColor: "#000000c9",
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default withNavigation(ListItem);