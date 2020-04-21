import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

function DeckItem({ deck, navigation, doNavigate }) {
  return (
    <Card
      style={styles.card}
      onPress={() => doNavigate && navigation.navigate("Deck", { deck })}
    >
      <Text category="h4">{deck.title}</Text>
      <Text category="h6">{deck.questions.length} flashcards</Text>
      <Text category="s1">Created: {deck.created}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 2,
    backgroundColor: "red",
  },
});

export default DeckItem;
