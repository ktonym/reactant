import { notification } from "antd";

export const openNotificationWithIcon = (type,msgTitle,msgDesc) => {
    notification[type]({
        message: msgTitle,
        description: msgDesc
    })
};