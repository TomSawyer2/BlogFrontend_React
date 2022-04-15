export const TIMEOUT: Number = 15000;
export const CONTENT_TYPE: String = 'application/json';

let baseURL: string = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://blog.tomsawyer2.xyz/api';
  // dev
} else {
  baseURL = 'https://blog.tomsawyer2.xyz/api';
  // build
}
export default baseURL;

const URL: any = {
  register: '/register',
  login: '/login',
  getAllArticle: '/getAllArticle',
  getArticleById: '/getArticleById',
  updateArticle: '/updateArticle',
  deleteArticle: '/deleteArticle',
  addArticle: '/addArticle',
  getAllTags: '/getAllTags',
  addTag: '/addTag',
  getArticleByTag: '/getArticleByTag',
  updateTempArticle: '/updateTempArticle',
  deleteTempArticle: '/deleteTempArticle',
  searchTempArticle: '/searchTempArticle',
  like: '/like',
  getAllMessages: '/getAllMessages',
  addMessage: '/addMessage',
  replyMessage: '/replyMessage',
  deleteMessage: '/deleteMessage',
};

const ERROR_CODE: any = {
  USER_EXIST: 1, // 用户已存在
  PASSWORD_ERR: 2, // 账号密码错误
  ACCOUNT_EMP: 3, // 账号不存在
  ADD_ERR: 4, // 文章添加失败
  DEL_ARTICLE_EMP: 5, // 删除的文章不存在
  DEL_ARTICLE_ERR: 6, // 删除文章失败
  QUERY_ERR: 7, // 查询失败
  UPDATE_ARTICLE_EMP: 8, // 查询的文章不存在
  UPDATE_ERR: 9, // 更新失败
  TAG_ERR: 10, // tag添加失败
  TAG_EXIST: 11, // tag已存在
  GET_TAG_ERR: 12, // 获取所有tag失败
  QUERY_ARTICLE_ERR: 13, // 查询文章不存在
  QUERY_ARTICLE_BY_TAG_ERR: 14, // 用tag查询文章失败
  TEMP_ARTICLE_ADD_ERR: 15, // 添加草稿失败
  TEMP_ARTICLE_DEL_ERR: 16, // 删除草稿失败
  LIKE_ERR: 17, // 点赞失败
  GET_MSGS_ERR: 18, // 获取所有信息失败
  ADD_MSG_ERR: 19, // 添加消息失败
  REPLY_ERR: 20, // 回复消息失败
  DEL_MSG_ERR: 21, // 删除消息失败
};

export { URL, ERROR_CODE };
