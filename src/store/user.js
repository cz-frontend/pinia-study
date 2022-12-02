import { defineStore } from "pinia";

/**
 * 用户模块
 */
export const useUserStore = defineStore("users", {
  state: () => {
    return {
      modulename: "users",
    };
  },
});
