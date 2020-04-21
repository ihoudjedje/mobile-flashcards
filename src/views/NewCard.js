import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, Layout, Input, Button } from "@ui-kitten/components";

class NewCard extends Component {
  state = {
    cardQuestion: "",
    cardAnswer: "",
  };
  render() {
    const { deck } = this.props.route.params;
    const { cardQuestion, cardAnswer } = this.state;

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
            value={cardQuestion}
            onChangeText={(value) => this.setState({ cardQuestion: value })}
            style={styles.input}
          />
          <Input
            placeholder="Answer..."
            value={cardAnswer}
            onChangeText={(value) => this.setState({ cardAnswer: value })}
            style={styles.input}
          />
          <Button
            style={styles.button}
            status="success"
            // accessoryRight={StarIcon}
            onPress={this.onSubmit}
          >
            SUBMIT
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

export default NewCard;
