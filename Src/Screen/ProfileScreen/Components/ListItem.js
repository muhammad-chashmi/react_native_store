import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Icon,Text } from 'native-base';
import allStyle from '../../../Config/Styles/allStyle';
import Colors from '../../../Config/Styles/Colors';

class ListItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { icon, title, routeName } = this.props.itemData;
    return (
      <TouchableOpacity
      activeOpacity={0.8}
      onPress ={()=>{
        this.props.navigation.navigate(routeName);
      }} 
       style={styles.container}>
        <Icon name={icon} style={styles.icon} />
        <Text style={styles.text} >{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    ...allStyle.text,
    fontSize: 15,
    color:Colors.general.gray
  },
  icon: {
    fontSize: 25,
    color:Colors.general.gray,
    marginRight: 10
    }
})

export default  withNavigation(ListItem);


/*
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
*/