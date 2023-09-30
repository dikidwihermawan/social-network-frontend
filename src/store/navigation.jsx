import { atom } from "recoil";

const navigation = atom({
  key: "navigation",
  default: {
    Home: "/",
    Explore: "/explore",
    Notification: "/notification",
    Messages: "/messages",
  },
});

export { navigation };
