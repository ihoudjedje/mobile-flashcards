import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import Decks from "../views/Decks";
import NewDeck from "../views/NewDeck";

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
    <Stack.Screen name="Decks" component={Decks} options={navigationOptions} />
    {/* <Stack.Screen name="Deck" component={Deck} options={navigationOptions} /> */}
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
