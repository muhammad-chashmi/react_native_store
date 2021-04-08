import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import ProductImagesSlider from './Components/ProductImagesSlider';
import {View, Text,Icon, Content, Header, Right, Container,Button } from 'native-base';

import allStyle from '../../Config/Styles/allStyle';
import { connect } from 'react-redux';
import { addToCartAction } from '../../Redux/actions/cartAction';
import headerStyle from '../../Config/Styles/headerStyle';

class ProductDetailsScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: "future of product"
    }

    renderDetails(index, item) {

        return (
            <View key={index} style={styles.itemContainer}>
                <Text style={[styles.question, { width: '50%' }]}>{item.question}</Text>
                <Text style={[styles.answer, { width: '50%' }]}>{item.answer}</Text>
            </View>
        )
    }
    render() {
        const { navigation } = this.props;
        const productData = navigation.getParam('productData');
        const producttitle = String(productData.title);
        return (

            <Container>
                <Header style={headerStyle.container}>
                    <Right style={headerStyle.contentContainer}>
                        <Icon
                            name="arrow-forward"
                            style={[headerStyle.icon, headerStyle.contentColor]}
                            onPress={() => {
                                this.props.navigation.pop()
                            }}
                        />
                        <Text style={[headerStyle.title, headerStyle.contentColor]}>
                            {productData.title}
                            {/* {producttitle.length > 30 ?
                                producttitle.substring(0, 30) + "..." :
                                producttitle
                            } */}
                        </Text>
                    </Right>
                </Header>
                <Content>
                    <View>
                        <ProductImagesSlider imageData={productData.images} />
                    </View>
                    <Text style={allStyle.mainTitle}>{productData.title}</Text>
                    <Text style={styles.mainTitle}>{productData.price}</Text>

                    <View>
                        <Text style={allStyle.secoundTitle}> ویزگی های محصول</Text>
                        <View style={styles.container}>
                            {productData.details.map((item, index) => {
                                return this.renderDetails(index, item)
                            })
                            }
                        </View>
                        <View >
                            <Button full success
                                onPress={async () => {
                                    const { addToCart, navigation } = this.props;
                                    productData.selectedCount = 3;
                                    await addToCart(productData);
                                    navigation.navigate("Cart");
                                }}
                            >
                                <Icon name='cart' />
                                <Text styles={allStyle.Text}> buy</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        padding: 10
    },
    itemContainer: {
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    question: {
        fontSize: 14,
        color: 'green'
    },
    answer: { fontSize: 14 },
    price: { fontSize: 14 }

})

mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(addToCartAction(product))
})

export default connect(null, mapDispatchToProps)(ProductDetailsScreen)