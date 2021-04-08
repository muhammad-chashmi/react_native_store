import React, { Component } from 'react';
import { Button, View, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderData from '../../../Global/SampleData/SliderData';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth;
const itemheight = screenWidth/2;  //    width: Dimensions.get("window").width / 2 - 4


export default class SpecialSlider extends Component {

    //   static navigationOptions={
    //     tabBarIcon:({tintColor})=>(
    //       <Icon name="ios-home" style={{fontSize: 20,color:tintColor}}/>
    //     )
    //   }
    renderItem({ item, index }) {
        return (
            <View style={styles.sliderContainer}>
                <Image source={{ uri: item.imagePath }} style={styles.slide} />
            </View>
        )
    }

    render() {
        return (

            <Carousel
                data={SliderData}
                renderItem={this.renderItem}
                sliderWidth={screenWidth}
                itemWidth={itemWidth}

            />
            //   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            //     <Text>Home</Text>
            //     <Button
            //       title="Go to Help"
            //       onPress={
            //         ()=>{
            //           this.props.navigation.navigate('Help')
            //         }
            //       }
            //     />
            //   </View>
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