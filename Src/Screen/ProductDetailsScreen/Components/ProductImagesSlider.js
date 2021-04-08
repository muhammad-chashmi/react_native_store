import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
//import SliderData from '../../../Global/SampleData/SliderData';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth;
const itemheight = screenWidth/2;

export default class ProductImagesSlider extends Component {

    renderItem({ item, index }) {
        return (
            <View style={styles.sliderContainer}>
                <Image source={{ uri: item.imagePath }} style={styles.slide} />
            </View>
        )
    }

    render() {
        const {imageData}= this.props;
        return (
            <Carousel
                data={imageData}
                renderItem={this.renderItem}
                sliderWidth={screenWidth}
                itemWidth={itemWidth}
            />
        );
    }
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: itemWidth,
        height: itemheight,
        marginTop: 10,
        marginBottom: 10
    },
    slide: {
        width: '100%',
        height: itemheight,
        borderRadius: 5,
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'stretch',
        resizeMode:'stretch'

    }
})