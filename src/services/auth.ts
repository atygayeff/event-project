import axios from "axios";
import { AuthRequest, AuthResponse, RegisterRequest } from "../types/auth";
import { CMS_ROOT } from "../constants";

export const registerUser = (data: RegisterRequest) => {
    return axios
        .post<AuthResponse>(`${CMS_ROOT}/auth/local/register`, data)
        .then((r) => r.data);
};


export const authUser = (data: AuthRequest) => {
    return axios
        .post<AuthResponse>(`${CMS_ROOT}/auth/local`, data)
        .then((r) => r.data);
};