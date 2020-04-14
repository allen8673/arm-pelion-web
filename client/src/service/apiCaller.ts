export const apiCaller = (caller: any, body: any = null, success: any, reject: any) => {
    return body ?
    caller(body).then((res: any) => success(res)).catch((error: any) => reject(error)) :
    caller().then((res: any) => success(res)).catch((error: any) => reject(error));
};

export const apiCallerNew = (caller: any, body: any = null, success: any, reject: any) => {
    return body ?
    caller(body).then((res: any) => {
        if (res) {
            success({
                status: res.status,
                data: res.data ? res.data : res.data?.data,
                total: res.total,
                success: res.success
            });
        } else {
            reject({ status : 500, data : null, msg: 'server no response!!!'});
        }
    }
    ).catch((error: any) => reject(error)) :
    caller().then((res: any) => success(res)).catch((error: any) => reject(error));
};

export const getData = (apiConfig: any, body: any): any => {
    const success = (res: any) => {
        if (res.status >= 200 && res.status < 300) {
            return res.data;
        }
    };
    const reject = (error: any) => null;
    return apiCaller(apiConfig, body, success, reject);
};
