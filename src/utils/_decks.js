import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "@MobileFlashcards:decks";

const dummyData = {
  History: {
    title: "History",
    timestamp: 1587337200000,
    created: "2020-04-20",
    questions: [
      {
        question: "When did World War I start?",
        answer: "July 28, 1914",
      },
      {
        question: "When did World War I end?",
        answer: "November 11, 1918",
      },
      {
        question: "When did World War II start?",
        answer: "September 1, 1939",
      },
      {
        question: "When did World War II end?",
        answer: "September 2, 1945",
      },
    ],
  },
  Geography: {
    title: "Geography",
    timestamp: 1587164400000,
    created: "2020-04-18",
    questions: [
      { question: "What the capital city of Algeria?", answer: "Algiers" },
      { question: "What the capital city of Finland?", answer: "Helsinki" },
      { question: "What the capital city of Portugal?", answer: "Lisbon" },
    ],
  },
  Chinese: {
    title: "Chinese",
    timestamp: 1587164400000,
    created: "2020-04-17",
    questions: [
      { question: "How we say Rain?", answer: "雨天" },
      { question: "How we say Child?", answer: "小孩兒" },
      { question: "How we say Car?", answer: "因為" },
      { question: "How we say Week?", answer: "週數" },
      { question: "How we say Body?", answer: "身材" },
      { question: "How we say Hand?", answer: "手" },
      { question: "How we say Head?", answer: "頭" },
      { question: "How we say West?", answer: "西" },
      { question: "How we say Dog?", answer: "狗狗" },
    ],
  },
};

export function setDummyData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
  return decks;
}
