import React, { Component } from 'react';
import { View, Text, Icon, Container, Content, Header, Input, Body} from 'native-base';
import { connect } from 'react-redux';
import headerStyle from '../../Config/Styles/headerStyle';
import { StyleSheet, Image } from 'react-native';
import allStyle from '../../Config/Styles/allStyle';
import ListItem from './Components/ListItem';
import ProductData from '../../Global/SampleData/ProductData';

class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: null
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="search" style={{ fontSize: 20, color: tintColor }} />
        )
    }

    render() {
        const { results } = this.state;
        return (
            <Container>
                <Header style={headerStyle.container}>
                    <Body style={headerStyle.contentContainer}>
                        <Input
                            placeholder="search item"
                            style={styles.searchInput}
                            onChangeText={value=> this.searchKeyWord(value)}
                        />
                    </Body>
                </Header>
                <Content>
                    <View style={{ flex: 1 }}>
                        {
                            results != null ?
                                results.map((item, index) => {
                                    return <ListItem key={index} item={item} />
                                })
                                :
                                <View style={styles.container}>
                                    <Image style={styles.searchImage} source={require('../../../Assets/search.png')} />
                                </View>
                        }
                    </View>
                </Content>
            </Container>
        );
    }

    searchKeyWord(keyword){
        const results = ProductData.filter(p=>p.title.includes(keyword));

        setTimeout(() => {
            this.setState({
                results
            })
        }, 100);  
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchImage: {
        width: 150,
        height: 150
    },
    searchInput: {
        ...allStyle.text,
        fontSize: 13,
        textAlign: 'right',
        textAlignVertical: 'center',
        padding: 0,
        ...headerStyle.contentColor
    }
})

export default SearchScreen;