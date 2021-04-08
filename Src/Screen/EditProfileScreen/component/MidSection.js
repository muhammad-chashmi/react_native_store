import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class MidSection extends Component {
  render() {
    return (
      <View style={styles.midSection}>
        <View style={[styles.outerView, styles.leftBar]}>
          <Text style={styles.txt1}>75+</Text>
          <Text style={styles.txt2}>Images</Text>
        </View>
        <View style={styles.outerView}>
          <Text style={styles.txt1}>5K</Text>
          <Text style={styles.txt2}>Subscribers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  midSection: {
    flexDirection: "row",
    backgroundColor: "rgba(183, 21, 64,1.0)",
    borderTopColor: "#fff",
    borderTopWidth: 8
  },
  outerView: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  txt1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  txt2: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5
  },
  leftBar: {
    borderRightWidth: 4,
    borderRightColor: "#fff"
  }
});
