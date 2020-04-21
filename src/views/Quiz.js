import React, { Component } from "react";
import { Layout, Text, Button, Card } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

class Quiz extends Component {
  state = { qIdx: 0, showAnswer: false, correctAnswers: 0, wrongAnswers: 0 };

  onShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  onCorrectBtn = () => {
    this.setState((prevState) => ({
      qIdx: prevState.qIdx + 1,
      correctAnswers: prevState.correctAnswers + 1,
      showAnswer: !prevState.showAnswer,
    }));
  };

  onWrongBtn = () => {
    this.setState((prevState) => ({
      qIdx: prevState.qIdx + 1,
      wrongAnswers: prevState.wrongAnswers + 1,
      showAnswer: !prevState.showAnswer,
    }));
  };

  onStartQuizAgain = () => {
    this.setState({
      qIdx: 0,
      wrongAnswers: 0,
      correctAnswers: 0,
      showAnswer: false,
    });
  };

  goToDecks = () => {
    this.props.navigation.navigate("Decks");
  };

  render() {
    const { qIdx, showAnswer, correctAnswers } = this.state;
    const { deck } = this.props.route.params;
    const totalQuestionsNbr = deck.questions.length;
    const quizComplete = qIdx === totalQuestionsNbr;
    const correctAnswersPercentage = (correctAnswers * 100) / totalQuestionsNbr;

    return (
      <Layout style={styles.container} level="1">
        <Text>{!quizComplete ? "Quiz Time" : "Quiz Complete"}</Text>
        {!quizComplete && (
          <Text>
            {qIdx + 1}/{deck.questions.length}
          </Text>
        )}
        {!quizComplete ? (
          <View style={styles.container}>
            <Card style={styles.cardQuiz} tatus="info">
              <Text>
                {!showAnswer
                  ? deck.questions[qIdx].question
                  : deck.questions[qIdx].answer}
              </Text>
            </Card>
            {!showAnswer ? (
              <Button
                status="primary"
                appearance="outline"
                style={styles.showAnswerBtn}
                onPress={this.onShowAnswer}
              >
                SHOW ANSWER
              </Button>
            ) : (
              <View style={styles.btnsContainer}>
                <Button
                  style={styles.button}
                  appearance="outline"
                  status="success"
                  onPress={this.onCorrectBtn}
                >
                  CORRECT
                </Button>
                <Button
                  style={styles.button}
                  appearance="outline"
                  status="danger"
                  onPress={this.onWrongBtn}
                >
                  WRONG
                </Button>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.container}>
            <Text>
              {correctAnswers} of out {totalQuestionsNbr} correct
            </Text>
            <Text>{correctAnswersPercentage} %</Text>
            <Button
              status="primary"
              appearance="outline"
              style={styles.showAnswerBtn}
              onPress={this.onStartQuizAgain}
            >
              START QUIZ AGAIN
            </Button>
            <Button
              status="primary"
              appearance="outline"
              style={styles.showAnswerBtn}
              onPress={this.goToDecks}
            >
              RETURN TO DECKS
            </Button>
          </View>
        )}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardQuiz: {
    height: 400,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  showAnswerBtn: {
    width: 350,
  },
  btnsContainer: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-around",
  },
});
export default Quiz;
