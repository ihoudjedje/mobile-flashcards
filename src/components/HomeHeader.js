import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import { white, bgBlueLight } from '../utils/colors';
// import { robotoMedium, robotoRegular } from '../utils/fonts';

export default function HomeHeader() {
  return (
    <View style={styles.headerPanel}>
      <Image
        source={require("../assets/images/cards-happy.png")}
        style={styles.cardsImg}
      />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Mobile</Text>
        <Text style={styles.headerText}>Flashcards</Text>
        <Text style={styles.headerTagline}>
          The fun way to prepare for exams
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 130,
    borderRadius: 10,
    backgroundColor: "#3366FF",
  },
  cardsImg: {
    width: 110,
    height: 110,
    resizeMode: "stretch",
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  headerTagline: {
    textAlign: "center",
    marginTop: 10,
    color: "#fff",
    fontSize: 13,
  },
});
