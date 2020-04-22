import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "@MobileFlashcards:notifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
    .catch((err) => console.log(err));
}

const localNotification = {
  title: "Do Homework!",
  body: "👋 don't forget to answer some decks for today!",
  ios: {
    sound: true,
  },
  android: {
    color: "green",
    sticky: false,
  },
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(async (data) => {
      if (data === null) {
        const { status } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        if (status === "granted") {
          Notifications.cancelAllScheduledNotificationsAsync;
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(10);
          tomorrow.setMinutes(0);
          Notifications.scheduleLocalNotificationAsync(localNotification, {
            time: tomorrow,
            repeat: "day",
          })
            .then(() => {
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            })
            .catch((err) => console.log(err));
        }
      }
    });
};
