import React, { Component } from "react";
import { Text, Layout, Button, Spinner } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import DeckItem from "../components/DeckItem";
import { fetchDeckByIdDB } from "./../utils/api";

class Deck extends Component {
  state = {
    deck: null,
    isLoading: true,
  };

  componentDidMount() {
    const { title } = this.props.route.params;

    this.refetchData = this.props.navigation.addListener("focus", () => {
      fetchDeckByIdDB(title)
        .then((deck) => {
          this.setState({ deck: deck, isLoading: false });
        })
        .catch((err) => {
          console.log(err);
        });
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.refetchData;
  }

  render() {
    const { deck, isLoading } = this.state;
    const totalQuestionsNbr = !isLoading ? deck.questions.length : null;

    return (
      <Layout style={styles.mainContainer} level="1">
        {isLoading ? (
          <Layout style={styles.emptyDataView}>
            <Spinner size="giant" />
          </Layout>
        ) : (
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
        )}
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

export default Deck;
