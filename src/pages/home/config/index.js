/**
 * 入口页操作栏按钮配置
 */
export const OperationButtonsConf = [
  {
    id: 1,
    disabled: false,
    operationText: "新增",
    operationType: "added",
    operationBtnType: "primary",
  },
  {
    id: 2,
    disabled: true,
    operationText: "批量删除",
    operationType: "delete",
    operationBtnType: "danger",
  },
];

/**
 * 表单验证配置
 */
export const rulesConf = {
  title: [{ required: true, message: "请天蝎通知主题", trigger: "blur" }],
  desc: [{ required: true, message: "请天蝎通知描述", trigger: "blur" }],
};
