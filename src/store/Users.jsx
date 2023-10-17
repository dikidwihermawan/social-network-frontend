import { atom, selector, selectorFamily } from "recoil";
import axios from "axios";

export const authenticated = atom({
  key: "authenticated",
  default: {
    check: false,
    user: [],
  },
});

export const getUsers = atom({
  key: "getUsers",
  default: [],
});

export const followUser = atom({
  key: "followUser",
  default: null,
});

export const getLoginUser = selector({
  key: "getLoginUser",
  get: async ({ get }) => {
    const checkUser = get(authenticated);
    try {
      let response = await axios.get("me");
      return {
        ...checkUser,
        check: true,
        user: response.data.data,
      };
    } catch (e) {
      return "error";
    }
  },
});

export const getAllUser = selector({
  key: "getAllUser",
  get: async ({ get }) => {
    try {
      let response = await axios.get("users");
      return response.data;
    } catch (e) {
      return e;
    }
  },
});

export const userFollowing = selector({
  key: "userFollowing",
  get: ({ get }) => {
    const user = get(followUser);
    try {
      axios.post("users/following", {
        username: user,
      });
    } catch (e) {
      return false;
    }
  },
  set: ({ set, get }) => {
    const users = get(getAllUser);
    set(
      getAllUser,
      users.map((user) => {
        if (user.username === get(followUser))
          return {
            ...user,
            follow: !user.follow,
          };
      })
    );
  },
});
