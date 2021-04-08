import React, { Component } from 'react';
import { Content, View, Text, Icon, Card, CardItem, Body, Badge } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, Image } from 'react-native';

class CartCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cart,tintColor } = this.props;
        if (cart.length>0) {
            return(<View>
                <Icon name="cart" style={{ fontSize: 20, color: tintColor }} />
                <Badge style={styles.badge}>
                    <Text style={styles.badgeText}>{cart.length}</Text>
                </Badge>
            </View>
            )
        }else{
            return (<Icon name="cart" style={{ fontSize: 20, color: tintColor }} />)
        }
    }
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: 7,
        right: '40%',
        width: 25,
        height: 25
    },
    badgeText: {
        fontSize: 14
    }
})

mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(CartCounter);

