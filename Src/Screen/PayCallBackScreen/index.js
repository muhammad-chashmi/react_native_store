import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, Text , Button} from 'native-base';
import PayCallBackData from '../../Global/SampleData/PayCallBackData';
import allStyle from '../../Config/Styles/allStyle';
import Colors from '../../Config/Styles/Colors';
import {connect} from 'react-redux'; 
import {emptyCartAction} from '../../Redux/actions/cartAction';

class PayCallBackScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.renderPaycallBack()
        }
      </View>
    )
  }

  renderPaycallBack() {
    const { navigation } = this.props;
    const result = navigation.getParam("result");
    const { ok, nok } = PayCallBackData;
    let { resultShows } = {};


    if (result == "ok") {
      resultShows = {
        imagePath: ok.imagePath,
        text: ok.text,
        textStyle: styles.ok
      }
      const {emptyCart} = this.props;
      emptyCart();
    } else {
      resultShows = {
        imagePath: nok.imagePath,
        text: nok.text,
        textStyle: styles.nok
      }
    }

    return (
      <View style={styles.container}>
        <Image source={{ uri: resultShows.imagePath }} style={styles.image} />
        <Text style={[styles.text, resultShows.textStyle]}>{resultShows.text}</Text>

        <Button full success
          onPress={async () => {
            const { navigate } = this.props.navigation;
            navigate("Home");
          }}
        >
          <Text styles={allStyle.text}> Back</Text>
        </Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  text: {
    ...allStyle.text,
    fontSize: 20
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  ok: {
    color: Colors.general.green
  },
  nok: {
    color: Colors.general.green
  }
})

mapDispatchToProps=dispatch=>({
  emptyCart:() => dispatch(emptyCartAction())
})

export default connect(null,mapDispatchToProps)(PayCallBackScreen);