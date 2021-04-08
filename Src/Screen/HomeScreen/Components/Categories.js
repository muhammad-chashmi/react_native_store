import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { ImageBackground, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import CategoriesData from '../../../Global/SampleData/CategoriesData';
import SliderData from '../../../Global/SampleData/SliderData';
import {withNavigation} from 'react-navigation';
//import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth )-5;
const itemheight = 150;


 class Categories extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        // };
    }

    renderItem({ item, index }) {
        console.log('item item :'+item);
        return (
            <TouchableHighlight key={item.id} style={styles.box} onPress={()=>{
                const{navigate} = this.props.navigation;
                navigate('ProductList',{categotyName:item.title})
            }} >
                <ImageBackground source={{ uri: item.imagePath }} style={styles.ImageBackground}>
                    <View style={styles.labelCotainer}>
                        <Text style={styles.label}> {item.title} </Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={StyleSheet.Container}>
                {
                    SliderData.map((item, index) => {
                        return this.renderItem({item}, index)
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: itemWidth,
        height: itemheight,
        margin: 2,
        borderWidth: 1,
        borderColor: '#ababab'
    },
    ImageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    labelCotainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 20,
        backgroundColor: '#000000c9',
    },
    label: {
        fontSize: 15,
        color: '#fff',
    }
})

export default withNavigation(Categories); 