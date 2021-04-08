import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Image
} from "react-native";

export default class MyBody extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.bigView}>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d1.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d2.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d3.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d4.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d5.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d6.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d7.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d8.jpg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d9.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
                  style={styles.myImage}
              source={require("../images/d10.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d11.jpeg")}
            />
          </View>
          <View style={styles.smallView}>
            <Image
              style={styles.myImage}
              source={require("../images/d12.jpeg")}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  bigView: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1
  },
  smallView: {
    margin: 2,
    height: 100,
    width: Dimensions.get("window").width / 2 - 4
  },
  myImage: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  }
});
