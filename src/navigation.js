import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import Decks from "./components/Decks";
import NewDeck from "./components/NewDeck";

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="DECKS" />
    <BottomNavigationTab title="NEW DECK" />
  </BottomNavigation>
);

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator headerMode="none" tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="DECKS" component={Decks} />
    <Screen name="NEW DECK" component={NewDeck} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
