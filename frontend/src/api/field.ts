import {CardPresentation, Field} from "../../../backend/src/types";
import {getSocket} from "./core";

export const subscribeToField = (cb: (field: Field) => void) => {
    getSocket().on('field', field => {
        return cb(field);
    });
}

export const unsubscribeToField= () => {
    getSocket().off('field')
}