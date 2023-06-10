import axios, { AxiosRequestConfig } from 'axios';
import { CreateUserParams, UserCredentialsParams } from './types';

const API_URL = process.env.REACT_APP_API_URL;
const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
};

export const postRegisterUser = (data: CreateUserParams) => {
    return axios.post(`${API_URL}/auth/register`, data, config);
}

export const postLoginUser = (data: UserCredentialsParams) => {
    return axios.post(`${API_URL}/auth/login`, data, config);
}

export const getAuthUser = () => {
    return axios.get(`${API_URL}/auth/status`, config);
};