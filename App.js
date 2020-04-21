import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { AppNavigator } from "./src/navigation/navigation";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducers";
import middleware from "./src/middleware";

import { getDecks } from "./src/actions";
import { fetchDecksDB } from "./src/utils/api";

class App extends React.Component {
  store = createStore(reducer, middleware);

  componentDidMount() {
    const { dispatch } = this.store;

    fetchDecksDB().then((decks) => dispatch(getDecks(decks)));
  }

  render() {
    return (
      <Provider store={this.store}>
        <>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
          </ApplicationProvider>
        </>
      </Provider>
    );
  }
}

export default App;
