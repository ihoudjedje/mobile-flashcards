import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import Deck from "../views/Deck";
import Decks from "../views/Decks";
import NewDeck from "../views/NewDeck";
import Quiz from "../views/Quiz";
import NewCard from "../views/NewCard";

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="DECKS" />
    <BottomNavigationTab title="NEW DECK" />
  </BottomNavigation>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navOptions = () => ({
  headerShown: false,
});

const DecksStack = () => (
  <Stack.Navigator initialRouteName="Decks">
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={navOptions}
    />
    <Stack.Screen name="Deck" component={Deck} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="NewCard" component={NewCard} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Decks" component={Decks} options={navOptions} />
    <Tab.Screen name="New Deck" component={NewDeck} options={navOptions} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DecksStack />
  </NavigationContainer>
);
