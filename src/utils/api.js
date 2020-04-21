import { AsyncStorage } from "react-native";
import { setDummyData, DECKS_STORAGE_KEY } from "./_decks";

export async function fetchDecksDB() {
  try {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (decks !== null) return JSON.parse(decks);
    else {
      setDummyData();
    }
  } catch (error) {
    console.warn(err.message);
  }
  return;
}

export async function fetchDeckByIdDB(title) {
  try {
    const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const decks = JSON.parse(result);
    return decks[title];
  } catch (error) {
    console.warn(err.message);
  }
  return;
}

export function addDeckToDB(deck) {
  try {
    return AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [deck.title]: deck,
      })
    );
  } catch (error) {
    console.warn(err.message);
  }
  return;
}

export async function addCardToDeckDB(title, card) {
  try {
    const result = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    let decks = JSON.parse(result);
    decks[title].questions.push(card);
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (error) {
    console.warn(err.message);
  }
  return;
}
