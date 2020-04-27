import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Spinner, Layout } from "@ui-kitten/components";
import { connect } from "react-redux";
import DeckItem from "../components/DeckItem";
import HomeHeader from "../components/HomeHeader";

class Decks extends Component {
  state = {};

  render() {
    const { decksSorted, emptyData, navigation } = this.props;

    return (
      <Layout style={styles.mainContainer}>
        <HomeHeader />
        {emptyData ? (
          <Layout style={styles.emptyDataView}>
            <Spinner size="giant" />
          </Layout>
        ) : (
          <View>
            <FlatList
              data={decksSorted}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: "column", margin: 5 }}>
                  <DeckItem
                    deck={item}
                    navigation={navigation}
                    doNavigate={true}
                  />
                </View>
              )}
              numColumns={2}
              keyExtractor={(item) => item.title}
            />
          </View>
        )}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  emptyDataView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function mapStateToProps(decks, { navigation }) {
  return {
    navigation,
    decksSorted: Object.values(decks).sort((a, b) => a.timestamp - b.timestamp),
    emptyData: Object.keys(decks).length === 0,
  };
}

export default connect(mapStateToProps)(Decks);
