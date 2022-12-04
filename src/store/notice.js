import { defineStore } from "pinia";

/**
 * 通知管理
 */
export const useNiticeManage = defineStore("noticeManage", {
  state: () => {
    return {
      list: [],
      totalCount: 0,
    };
  },
  actions: {
    addedList(record) {
      this.list = [[record], ...this.list];
    },
  },
  getters: {
    getNoticeTotal() {
      return (this.totalCount = this.list.length);
    },
  },
});
