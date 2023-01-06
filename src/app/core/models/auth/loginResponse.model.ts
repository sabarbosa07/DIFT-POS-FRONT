import { UserAuthResponse } from "./userAuthResponse.model";

export interface LoginResponse {
    token: string;
    userAuth: UserAuthResponse;
}