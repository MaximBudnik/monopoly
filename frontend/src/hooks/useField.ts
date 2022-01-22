import {useEffect, useState} from "react";
import {subscribeToField, unsubscribeToField} from "../api/field";
import {CardPresentation, Field} from "../../../backend/src/types";

export const useField = () => {
    const [field, setField] = useState<Field>()

    useEffect(() => {
        subscribeToField((f) => {
            setField(f)
        })
        return unsubscribeToField
    }, [])

    return {field}
}