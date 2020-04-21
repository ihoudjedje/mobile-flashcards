import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Divider, TopNavigation, Layout, Text } from "@ui-kitten/components";
import { connect } from "react-redux";
import DeckItem from "../components/DeckItem";

class Decks extends Component {
  state = {};

  render() {
    const { decks, decksIds, emptyData, navigation } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={{ flex: 1 }} level="1">
          {emptyData ? (
            <Text>No decks yet!</Text>
          ) : (
            <View>
              {decksIds.map((id) => (
                <DeckItem
                  key={id}
                  deck={decks[id]}
                  navigation={navigation}
                  doNavigate={true}
                />
              ))}
            </View>
          )}
        </Layout>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  return {
    decks,
    navigation,
    decksIds: Object.keys(decks).sort((a, b) => a.timestamp - b.timestamp),
    emptyData: Object.keys(decks).length === 0,
  };
}

export default connect(mapStateToProps)(Decks);
