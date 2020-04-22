import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Layout, Text, Input, Icon, Button } from "@ui-kitten/components";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { addDeckToDB } from "../utils/api";

const StarIcon = (props) => <Icon {...props} name="paper-plane" />;

class Decks extends Component {
  state = {
    titleText: "",
  };

  onSubmit = () => {
    const { titleText } = this.state;
    const { addDeck, goToDeck, addDeckToDB } = this.props;

    addDeckToDB(titleText);
    addDeck(titleText);
    this.setState({ titleText: "" });
    goToDeck(titleText);
  };

  render() {
    const { titleText } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={styles.topContainer} level="1">
          <Text style={styles.text} category="h2">
            Add Deck
          </Text>
          <Text style={styles.text} category="s2">
            Create a new deck of flashcards
          </Text>

          <Input
            placeholder="Place your Text"
            value={titleText}
            onChangeText={(value) => this.setState({ titleText: value })}
            style={styles.input}
          />

          <Button
            style={styles.button}
            status="success"
            accessoryRight={StarIcon}
            onPress={this.onSubmit}
          >
            SUBMIT
          </Button>
        </Layout>
      </SafeAreaView>
    );
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  const timestamp = new Date().valueOf();
  const created = new Date().toISOString().split("T")[0];

  return {
    addDeck: (titleText) => {
      dispatch(
        addDeck({
          title: titleText,
          timestamp,
          created,
          questions: [],
        })
      );
    },
    addDeckToDB: (titleText) => {
      addDeckToDB({
        title: titleText,
        timestamp,
        created,
        questions: [],
      });
    },
    goToDeck: (titleText) => navigation.navigate("Deck", { title: titleText }),
  };
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: 300,
  },
});

export default connect(null, mapDispatchToProps)(Decks);
