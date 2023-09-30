import { atom } from "recoil";

const datausers = atom({
  key: "users",
  default: {
    users: [],
  },
});

export { datausers };
