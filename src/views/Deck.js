import React, { Component } from "react";
import { Text, Layout, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import DeckItem from "../components/DeckItem";

class Deck extends Component {
  state = {};
  render() {
    const { deck } = this.props.route.params;
    const totalQuestionsNbr = deck.questions.length;

    return (
      <Layout level="1">
        <DeckItem deck={deck} doNavigate={false} />
        <Button style={styles.button} status="info">
          ADD CARD
        </Button>
        <Button
          style={styles.button}
          status="success"
          disabled={totalQuestionsNbr === 0}
          onPress={() => this.props.navigation.navigate("Quiz", { deck })}
        >
          START QUIZ
        </Button>
        {totalQuestionsNbr === 0 && (
          <Text style={styles.errorMsg} category="p2">
            Add at least 1 card before starting the quiz!
          </Text>
        )}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 3,
  },
  errorMsg: {
    color: "orange",
  },
});

export default Deck;
