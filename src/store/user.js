import { defineStore } from "pinia";

/**
 * 用户模块
 */
export const useUserStore = defineStore("users", {
  state: () => {
    return {
      modulename: "users",
      userinfo: {
        name: "",
        age: "",
        desc: "",
      },
    };
  },
  getters: {
    /**
     * 获取模块名称
     */
    getModuleName: (state) => {
      return state.modulename;
    },
    getUserInfo() {
      return this.userinfo;
    },
  },
});
