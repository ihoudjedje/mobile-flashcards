# Mobile Flashcards

[Udacity's React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) 3rd Project

| Content                             |
| :---------------------------------- |
| [Screenshots](#screenshots)         |
| [App Experience](#app-experience)   |
| [Getting Started](#getting-started) |
| [Local Testing](#local-testing)     |
| [Built With](#built-with)           |
| [App Features](#app-features)       |
| [Tech Stack](#tech-stack)           |
| [Author](#author)                   |
| [Acknowledgments](#acknowledgments) |
| [License](#license)                 |

## Screenshots

![alt text](https://github.com/ilyeSudo/MobileFlashcards/blob/master/screenshots/all_views.png?raw=true)

## App Experience

Mobile Flashcards is an app that helps you study. For each subject or category you are studying, you create a deck. Each deck (category) will contain questions (cards) you want to asnwer.

The app comprises of "Decks" containing "Cards". Each deck you create will contain questions (cards) for a particular category (deck). For each card you create a question and an answer.

Once you have a deck with cards, you can start a quiz to test your knowledge. As you go through the quiz, you will mark your answers as "Correct" or "Incorrect". At the end of your quiz you will get a final score.

Happy Studying ;)

## Getting Started

- Clone the repo
- `yarn install` or `npm install` - Install dependencies
- Start emulator or connect a physical device
- `yarn start` or `npm start` - Launch the local server, Open [debugger-ui](http://localhost:8081/debugger-ui/) to view it in the browser
- `yarn android/ios` or `npm run android/ios` - Launch the app

## Local Testing

| Platform |     Simulator      |          Device          |
| :------: | :----------------: | :----------------------: |
| Android  | :heavy_check_mark: |    :heavy_check_mark:    |
|   iOS    | :heavy_check_mark: | :heavy_multiplication_x: |

## Built With

- [React Native](https://www.github.com/facebook/react-native) - A framework for building native apps with React.
- [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
- [Expo](https://www.github.com/expo/expo) - An open-source platform for making universal native apps with React.
- [Kitten UI](https://akveo.github.io/react-native-ui-kitten/) - Design system based UI library

## App Features

- **Add New Deck**: Option to create new decks/categories

- **Add New Card**: Option to add a new card to the deck. Card contains a question and answer.

- **Quiz Result**: When all questions have been asked and marked as correct or incorrect a results view displays with a score.

- **Notifications**: User receives a local notification at 9pm if they haven't opened the app that day.

## Tech Stack

This is a React Native app and as such the project was started using [`create-react-native-app`](https://github.com/expo/create-react-native-app). The code base is rather straight forward and a standard React component model is used. [`Redux`](https://redux.js.org/) is used for state management and React Native [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage) is used for persistence. The data structure used relies on a deck_title_id being generated for each deck, and the data for each deck being stored accordingly:

```
deck_title_id: {
  id: deck_title_id,
  name: name_of_deck,
  questions: [
    {question , answer},
    {question , answer},
    {question , answer}
  ]
},
deck_title_id: {
  id: deck_title_id,
  name: name_of_deck,
  questions: [
    {question , answer},
    {question , answer},
    {question , answer}
  ]
}
```

This application could certainly be enhanced (such as enabling deletion support for decks and cards), but as of right now, it delivers on the requirements for the Udacity React Nanodegree.

## Author

- **Ilyes Houdjedje** - [IlyeSudo](https://ilyesudo.github.io)

## Acknowledgments

- Hat tip to [Mr.Tyler McGinnis](https://twitter.com/tylermcginn) for the great course and to all the Udacity team!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
