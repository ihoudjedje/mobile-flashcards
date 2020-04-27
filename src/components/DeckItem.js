import React from "react";
import { Card, Text, Divider } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

function DeckItem({ deck, navigation, doNavigate }) {
  return (
    <Card
      onPress={() =>
        doNavigate && navigation.navigate("Deck", { title: deck.title })
      }
      style={styles.card}
    >
      <Text style={{ textAlign: "center", fontWeight: "bold" }} category="h5">
        {deck.title}
        {"\n"}
      </Text>
      <Divider />
      <Text style={{ textAlign: "center" }} category="h6">
        {deck.questions.length} flashcards
      </Text>
      <Divider />
      <Text style={{ textAlign: "center" }} category="s1">
        {"\n"}Created: {deck.created}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    borderRadius: 20,
    height: 180,
    alignItems: "center",
    backgroundColor: "#D9E4FF",
  },
});

export default DeckItem;
