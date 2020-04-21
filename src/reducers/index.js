import { GET_DECKS, GET_DECK, ADD_DECK, ADD_CARD_TO_DECK } from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck,
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.card.title]: {
          ...state[action.card.title],
          questions: state[action.card.title].questions.concat([
            action.card.card,
          ]),
        },
      };
    default:
      return state;
  }
}
