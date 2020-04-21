import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import Deck from "../views/Deck";
import Decks from "../views/Decks";
import NewDeck from "../views/NewDeck";
import Quiz from "../views/Quiz";

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

const navigationOptions = () => ({
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
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen
      name="Decks Stack"
      component={DecksStack}
      options={navigationOptions}
    />
    <Tab.Screen
      name="New Deck"
      component={NewDeck}
      options={navigationOptions}
    />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
