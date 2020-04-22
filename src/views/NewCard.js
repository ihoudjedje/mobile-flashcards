import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, Layout, Input, Button, Icon } from "@ui-kitten/components";
import { connect } from "react-redux";
import { addCardToDeck } from "../actions";
import { addCardToDeckDB } from "../utils/api";

const AddIcon = (props) => <Icon {...props} name="plus-circle-outline" />;

class NewCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  onSubmit = () => {
    const { addCard, goBack } = this.props;
    const { deck } = this.props.route.params;
    const { question, answer } = this.state;

    addCard({ title: deck.title, card: { question, answer } });
    goBack();
    this.setState({ question: "", answer: "" });
  };

  render() {
    const { deck } = this.props.route.params;
    const { question, answer } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={styles.topContainer} level="1">
          <Text style={styles.text} category="h2">
            Add Card
          </Text>
          <Text style={styles.text} category="s2">
            Add a new card to {deck.title} flashcards
          </Text>
          <Input
            placeholder="Question..."
            value={question}
            onChangeText={(value) => this.setState({ question: value })}
            style={styles.input}
          />
          <Input
            placeholder="Answer..."
            value={answer}
            onChangeText={(value) => this.setState({ answer: value })}
            style={styles.input}
          />
          <Button
            style={styles.button}
            status="success"
            accessoryRight={AddIcon}
            onPress={this.onSubmit}
          >
            ADD
          </Button>
        </Layout>
      </SafeAreaView>
    );
  }
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

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addCard: ({ title, card }) => {
      addCardToDeckDB(title, card);
      dispatch(
        addCardToDeck({
          title,
          card,
        })
      );
    },
    goBack: () => navigation.goBack(),
  };
}

export default connect(null, mapDispatchToProps)(NewCard);
