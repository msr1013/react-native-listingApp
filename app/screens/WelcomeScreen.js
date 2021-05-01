import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={1.5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Lets Sell it!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 5,
  },
  logoContainer: {
    position: "absolute",
    top: 5,
    alignItems: "center",
  },

  tagline: {
    color: "#ffffff",
    fontWeight: "600",
    position: "absolute",
    top: 110,
    fontSize: 25,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
