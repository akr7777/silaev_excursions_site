import { GidContactType } from "../store/appSlice/types/app-types";

export const decodeContactsFromString = (str: string): GidContactType => {
    try {
        if (str.length > 0) {
            const contactsJSON = JSON.parse(str)
            const res: GidContactType = {
                ...contactsJSON
            }
            return res
        }
        

    } catch (e) {
        console.error('decodeContactsFromString error:', e);
        return {}
    }
    return {}
}