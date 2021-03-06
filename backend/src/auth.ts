import {config} from "./constants/config";
import {JwtPayload, sign, verify} from 'jsonwebtoken'
import {v4} from "uuid";

export const getToken = (username: string, room: string) => sign({username, id: v4(), room}, config.jwtSecret);

export const verifyToken = (token: string) => verify(token, config.jwtSecret) as JwtPayload & { username: string, id: string };
