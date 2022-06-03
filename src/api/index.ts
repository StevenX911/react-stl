import { message } from "antd";
import axios from "axios";

// axios
const isDev = process.env.NODE_ENV === "development";
const service = axios.create({
  baseURL: isDev ? "https://cnodejs.org/api/v1" : "https://cnodejs.org/api/v1",
});

// 请求拦截
service.interceptors.request.use(config => {
  console.log("request:", config);
  return config;
});

// 响应拦截
service.interceptors.response.use(reponse => {
  console.log("response:", reponse);
  if (reponse.status === 200) {
    return reponse;
  } else {
    message.error("请求响应发生错误");
  }
});

// 获取文章列表
export const getTopics = () => {
  return service.get("/topics");
};
