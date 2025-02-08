export type EventType = {
    id: string,
    date: string,
    title: string,
    description: string,
    additionalInfo?: string,
    link?: string,
    photo?: string
}
export type NewType = {
    id: string,
    date: string,
    title: string,
    description: string,
    additionalInfo?: string,
    link?: string,
    photo?: string
}
export interface GidType {
    login?: string,
    passwordHash?: string,

    id: string,
    fullName: string,
    description?: string,
    contactInfo?: string,
    avatar?: string,
}

export type AppSliceType = {
    events: Array<EventType>
    isEventsLoading: boolean,
    
    news: Array<NewType>,
    isNewsLoading: boolean,

    gids: Array<GidType>,
    isGidsLoading: boolean,

    showItemId: string | null,
    isMobileMenuShown: boolean,
}

export type GidContactType = {
    phone?: string,
    email?: string
    telegram?: string
    vk?: string
    youtube?: string
    rutube?: string
}


export const appInitContent: AppSliceType = {
    events: [],
    isEventsLoading: false,
    news: [],
    isNewsLoading: false,
    gids: [],
    isGidsLoading: false,
    showItemId: null,
    isMobileMenuShown: false,
}