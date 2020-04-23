import React, { Component } from "react";
import { Text, Layout, Button, Spinner } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import DeckItem from "../components/DeckItem";
import { connect } from "react-redux";

class Deck extends Component {
  render() {
    const { deck } = this.props;
    const totalQuestionsNbr = deck.questions.length;

    return (
      <Layout style={styles.mainContainer} level="1">
        <Layout>
          <DeckItem deck={deck} doNavigate={false} />
          <View style={styles.btnContainer}>
            <Button
              style={styles.button}
              status="info"
              onPress={() =>
                this.props.navigation.navigate("NewCard", { deck })
              }
            >
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
          </View>
          {totalQuestionsNbr === 0 && (
            <Text style={styles.errorMsg} category="p2">
              Add at least 1 card before starting the quiz!
            </Text>
          )}
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 3,
  },
  errorMsg: {
    color: "orange",
  },
  btnContainer: {
    width: 300,
    marginTop: 100,
  },
});

function mapStateToProps(decks, { route }) {
  return {
    deck: decks[route.params.title],
  };
}

export default connect(mapStateToProps)(Deck);
