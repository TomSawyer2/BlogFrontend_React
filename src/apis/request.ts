import { Interceptor } from './interceptor';
import baseURL from '../config/index';
import { ERROR_CODE } from '../config/index';
import { message } from 'antd';
export default class Request {
  public axios: any;

  constructor() {
    // 获取axios实例
    this.axios = new Interceptor().getInterceptors();
  }

  /**
   * get请求
   * @param {String} url [请求的url地址（去头）]
   * @param {object} params [请求时携带的参数, 默认为空]
   */
  public getData(url: string, params: object = {}) {
    return new Promise((resolve, reject) => {
      const config: any = { params };

      this.axios
        .get(baseURL + url, {
          ...config,
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: { message: any }) => {
          reject(err.message);
        });
    });
  }

  /**
   * post请求
   * get请求
   * @param {String} url [请求的url地址]
   * @param {object} data [请求时携带的参数, 默认为空]
   * @param {object} headers [自定义头部信息， 默认为空]
   */
  public postData(url: string, data: object, headers: object = {}) {
    return new Promise((resolve, reject) => {
      const config: any = {};

      let newData: any = data;

      this.axios
        .post(baseURL + url, (data = newData), {
          ...config,
          headers,
        })
        .then((res: any) => {
          this.resultHandle(res, resolve);
        })
        .catch((err: { message: any }) => {
          reject(err.message);
        });
    });
  }

  /**
   * resultHandle 根据响应code
   * @param {any} res [请求返回值]
   * @param {any} resolve [Promise.resolve]
   * @param {boolean} loading [判断是否是需要loading]
   */
  public resultHandle(
    res: any,
    resolve: {
      (value?: unknown): void;
      (value?: unknown): void;
      (arg0: any): void;
    },
  ) {
    if (res.code === '0') {
      resolve(res);
    } else {
      this.errorHandle(res);
      // tslint:disable-next-line:no-unused-expression
      resolve(res);
    }
  }

  /**
   * 服务端状态处理
   * @param {any} res [请求返回值]
   */
  public errorHandle(res: any) {
    const errorCode = res.data.status;
    // 错误处理
    switch (errorCode) {
      case ERROR_CODE.USER_EXIST:
        message.error('用户已存在');
        break;

      case ERROR_CODE.PASSWORD_ERR:
        message.error('账号密码错误');
        break;

      case ERROR_CODE.ACCOUNT_EMP:
        message.error('账号不存在');
        break;

      case ERROR_CODE.ADD_ERR:
        message.error('文章添加失败');
        break;

      case ERROR_CODE.DEL_ARTICLE_EMP:
        message.error('删除的文章不存在');
        break;

      case ERROR_CODE.DEL_ARTICLE_ERR:
        message.error('删除文章失败');
        break;

      case ERROR_CODE.QUERY_ERR:
        message.error('查询失败');
        break;

      case ERROR_CODE.UPDATE_ARTICLE_EMP:
        message.error('查询的文章不存在');
        break;

      case ERROR_CODE.UPDATE_ERR:
        message.error('更新失败');
        break;

      case ERROR_CODE.TAG_ERR:
        message.error('tag添加失败');
        break;

      case ERROR_CODE.TAG_EXIST:
        message.error('tag已存在');
        throw new Error(res.data.msg);

      case ERROR_CODE.GET_TAG_ERR:
        message.error('获取所有tag失败');
        break;

      case ERROR_CODE.QUERY_ARTICLE_ERR:
        message.error('查询文章不存在');
        return res;

      case ERROR_CODE.QUERY_ARTICLE_BY_TAG_ERR:
        message.error('查询文章错误');
        break;

      default:
        return res;
    }
  }
}
