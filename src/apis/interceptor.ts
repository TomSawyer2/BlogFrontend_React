import axios from 'axios';

export class Interceptor {
  private static errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
    }
  }

  public instance: any;

  constructor() {
    this.instance = axios.create({ timeout: 1000 * 12 });
    this.initInterceptors();
  }

  public getInterceptors() {
    return this.instance;
  }

  // 初始化拦截器
  public initInterceptors() {
    // 设置post请求头
    this.instance.defaults.headers.post['Content-Type'] = 'application/json';
    /**
     * 请求拦截器
     * 每次请求前，如果存在token则在请求头中携带token
     */
    this.instance.interceptors.request.use(
      (config: { headers: { Authorization: string } }) => {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = token;
        return config;
      },
      (error: any) => {
        console.log(error);
      },
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      // 请求成功
      (res: { status: number; headers: object; data: { token: string } }) => {
        if (res.status === 200 || res.status === 304) {
          return Promise.resolve(res.data);
        } else {
          Interceptor.errorHandle(res);
          return Promise.reject(res.data);
        }
      },
      // 请求失败
      (error: { response: any }) => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Interceptor.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          console.log('断网了');
        }
      },
    );
  }
}
