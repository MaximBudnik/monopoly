import {config} from "../constants/config";

export const getToken = (username: string) => fetch(`${config.apiUrl}/getToken/${username}`, {method: 'GET'})