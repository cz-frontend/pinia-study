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
    // 新增
    addedList(record) {
      return (this.list = [record, ...this.list]);
    },
    // 修改
    deleteList(index) {
      return (this.list = this.list.splice(1, index));
    },
  },
  getters: {
    getNoticeTotal() {
      return (this.totalCount = this.list.length);
    },
    getListData: (state) => {
      return state.list;
    },
  },
});
