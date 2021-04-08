import React, { Component } from 'react';
import { StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, CartItem, Card, Body} from 'native-base';
//import allStyle from '../../../Config/Styles/allStyle';
import { withNavigation } from 'react-navigation';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        const {title, imagePath} = item;

        alert('####' + JSON.stringify(item) + '###');

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate("ProductDetails", { productData: item })
                }}
            >
                <Card>
                    <CartItem>
                        <Body>
                            <View style={styles.cartItemContainer}>
                                <View style={[styles.colContainer, { width: '25%' }]}>
                                    <Image source={{ uri: imagePath }} style={styles.image} />
                                </View>
                                <View style={[styles.colContainer, { width: '65%' }]}>
                                    <Text style={styles.title}> {title} </Text>
                                </View>
                            </View>
                        </Body>
                    </CartItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 15
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default withNavigation(ListItem);  