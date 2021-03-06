import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ImageBackground
} from "react-native";

import * as firebase from "firebase";
export default class Splash extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }
  render() {
    return (
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../../assets/logo.png")}
            />

            <Text style={styles.title}>NCRB</Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../../assets/load.gif")}
            />
            <Text style={styles.subtitle}>Citizen Interface</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 35,
    fontWeight: "500"
  },
  subtitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "200",
    textShadowColor: "grey",
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: "center",
    flex: 1
  }
});
