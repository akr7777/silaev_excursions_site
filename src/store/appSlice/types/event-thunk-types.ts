import { EventType } from "./event-types";

export type GetAllEventThunkResType = Omit<EventType, "photo"> & { ePreviewPhoto: string }
export type GetAllNewThunkResType = Omit<EventType, "photo"> & { nPreviewPhoto: string }