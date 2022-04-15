import { Interceptor } from './interceptor';

export default class Request {
    public axios: any;

    constructor() {
        // 获取axios实例
        this.axios = new Interceptor().getInterceptors();
    }

    /**
     * get请求
     * @param {String} url [请求的url地址]
     * @param {object} params [请求时携带的参数, 默认为空]
     */
    public getData(url: string, params: object = {}) {

        return new Promise((resolve, reject) => {
            const config: any = { params };

            this.axios.get(url, {
                ...config,
            }).then((res: any) => {
                this.resultHandle(res, resolve);
            }).catch((err: { message: any; }) => {
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
    public postData(
        url: string,
        data: object,
        headers: object = {},
        ) {
        return new Promise((resolve, reject) => {

            const config: any = {};

            let newData: any = data;

            this.axios.post(url, data = newData, {
                ...config,
                headers,
            }).then((res: any) => {
                this.resultHandle(res, resolve);
            }).catch((err: { message: any; }) => {
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
        resolve: { (value?: unknown): void; (value?: unknown): void; (arg0: any): void; }) {
        if (res.code === '0') {
            resolve(res);
        } else {
            this.errorHandle(res);

            // tslint:disable-next-line:no-unused-expression
            resolve(res);
        }
    }

    /**
     * 服务端状态处理,例如中断性异常,退出异常等等(与拦截器http握手状态注意区分,一般都能分清楚吧)
     * 1000000 为session过期响应码
     * @param {any} res [请求返回值]
     */
    public errorHandle(res: any) {
        switch(res.code) {
            case '100001':
                console.log(123);
                
        }
    }

}