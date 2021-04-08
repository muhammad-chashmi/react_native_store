import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
//import ListItemComponent from '../../Screen/ProductListScreen/Components/ListItem';
export default class ListComponent extends Component {
  constructor(props) {
    super(props);
   // this.state = {
   // };
  }

  render() {
      const data = this.props.data;
      const ListItem = this.props.ListItem;

    return (
     <FlatList
            data={data}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=>{
              return(
              <ListItem itemData={item} />)
            }}
      />
    );
  }
}
