<p align="center">
  <a href="https://github.com/ilyeSudo/mobile-flashcards">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mobile Flashcards</h3>

  <p align="center">
    The funny way to prepare for tests and exams!
    <br />
    Udacity's <a href="https://www.udacity.com/course/react-nanodegree--nd019">React Nanodegree</a> 3rd Project
    <br />
    <br />
    <a href="https://github.com/ilyeSudo/mobile-flashcards/issues">Report Bug</a>
    ·
    <a href="https://github.com/ilyeSudo/mobile-flashcards/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Screenshots](#screenshots)
  - [User Experience](#user-experience)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Local Testing](#local-testing)
- [App Features](#app-features)
- [Data](#data)
- [Author](#author)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## About The Project

### Screenshots

![alt text](https://github.com/ilyeSudo/mobile-flashcards/blob/master/images/all_views.png?raw=true)

### User Experience

Mobile Flashcards is an app that helps you study. For each subject or category you are studying, you create a deck. Each deck (category) will contain questions (cards) you want to asnwer.

The app comprises of "Decks" containing "Cards". Each deck you create will contain questions (cards) for a particular category (deck). For each card you create a question and an answer.

Once you have a deck with cards, you can start a quiz to test your knowledge. As you go through the quiz, you will mark your answers as "Correct" or "Incorrect". At the end of your quiz you will get a final score.

Happy Studying ;)

### Built With

- [React Native](https://www.github.com/facebook/react-native) - A framework for building native apps with React.
- [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
- [Expo](https://www.github.com/expo/expo) - An open-source platform for making universal native apps with React.
- [Kitten UI/Eva Design](https://akveo.github.io/react-native-ui-kitten/) - Design system based UI library

## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- `yarn` or `npm`, I highly recommand the former!

```sh
sudo apt update && sudo apt install yarn
```

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
> git clone https://github.com/ilyeSudo/mobile-flashcards.git
```

2. Install project packages

```sh
> yarn install OR npm install
```

3. Start the emulator or connect a physical device and check with `adb devices` command

4. Launch the local server, Open [debugger-ui](http://localhost:8081/debugger-ui/) to view it in the browser

```sh
> yarn start OR npm install
```

5. Launch the app on simulator or a connected device

```sh
> yarn android/ios OR npm run android/ios
```

## Local Testing

| Platform |     Simulator      |          Device          |
| :------: | :----------------: | :----------------------: |
| Android  | :heavy_check_mark: |    :heavy_check_mark:    |
|   iOS    | :heavy_check_mark: | :heavy_multiplication_x: |

## App Features

- **Add New Deck**: Option to create new decks/categories

- **Add New Card**: Option to add a new card to the deck. Card contains a question and answer.

- **Quiz Result**: When all questions have been asked and marked as correct or incorrect a results view displays with a score.

- **Notifications**: User receives a local notification at 9pm if they haven't opened the app that day.

## Data

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

- **Ilyes Houdjedje** - [Linkedin](https://www.linkedin.com/in/ilyes-houdjedje) - [Github](https://github.com/ilyeSudo) - [Twitter](https://twitter.com/ilyesudo)

## Acknowledgement

- Hat tip to [Mr.Tyler McGinnis](https://twitter.com/tylermcginn) for the great course and to all the Udacity team!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
