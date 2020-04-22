import React, { Component } from "react";
import { Layout, Text, Button, Card, Icon } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  state = { qIdx: 0, showAnswer: false, correctAnswers: 0, wrongAnswers: 0 };

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
      .catch((err) => console.log(err));
  }

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

  resultsColor = (result) => {
    return result < 50 ? "red" : result < 75 ? "orange" : "green";
  };

  render() {
    const { qIdx, showAnswer, correctAnswers } = this.state;
    const { deck } = this.props.route.params;
    const totalQuestionsNbr = deck.questions.length;
    const quizComplete = qIdx === totalQuestionsNbr;
    const correctAnswersPercentage = (correctAnswers * 100) / totalQuestionsNbr;

    return (
      <Layout style={[styles.mainContainer, { paddingTop: 50 }]} level="1">
        <Text style={styles.quizHeader}>
          {!quizComplete ? "Question" : "Quiz Complete"}
        </Text>
        {!quizComplete && (
          <Text style={styles.quizCounter}>
            {qIdx + 1}/{deck.questions.length}
          </Text>
        )}
        {!quizComplete ? (
          <View style={styles.mainContainer}>
            <Card style={styles.cardQuiz} tatus="info">
              <Text style={styles.quizText}>
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
          <View style={styles.mainContainer}>
            <View style={styles.completedContainer}>
              <Icon
                style={styles.icon}
                fill={this.resultsColor(correctAnswersPercentage)}
                name={
                  correctAnswersPercentage >= 50
                    ? "checkmark-circle-2"
                    : "close-circle"
                }
              />
              <Text
                style={[
                  styles.statsText,
                  { color: this.resultsColor(correctAnswersPercentage) },
                ]}
              >
                {correctAnswersPercentage.toFixed(1)}%{"\n"}
                {correctAnswers} of out {totalQuestionsNbr} correct
              </Text>
            </View>
            <View style={styles.completedBtnsContainer}>
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
          </View>
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
  quizHeader: {
    fontWeight: "bold",
    fontSize: 20,
  },
  quizCounter: {
    fontSize: 15,
  },
  cardQuiz: {
    height: 400,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  quizText: {
    fontSize: 30,
    textAlign: "center",
  },
  showAnswerBtn: {
    width: 350,
  },
  btnsContainer: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-around",
  },
  completedContainer: {
    alignItems: "center",
  },
  statsText: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 50,
  },
  icon: {
    width: 150,
    height: 150,
  },
  completedBtnsContainer: {
    height: 200,
    justifyContent: "space-evenly",
  },
});
export default Quiz;
