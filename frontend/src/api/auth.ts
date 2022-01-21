import {config} from "../constants/config";

export const getToken = (username: string, room: string) => fetch(`${config.apiUrl}/getToken/${room}/${username}`, {method: 'GET'})