import { api } from './api';

const baseUrl = '';


export const loginApi = (data: any) => api.post(`${baseUrl}/user/login`, data);



