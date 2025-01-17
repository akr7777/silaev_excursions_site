import { DIV_IDS } from "../../shared/consts"

type SiteMenuItemType = {
    id: string,
    title: string,
    divId: string,
    orderIndex: number,
}
export const siteMenuItems: SiteMenuItemType[] = [
    {
        id: 'site-menu-item-1',
        orderIndex: 1,
        title: "О нас",
        divId: DIV_IDS.about,
    },
    {
        id: 'site-menu-item-2',
        orderIndex: 2,
        title: "Мероприятия",
        divId: DIV_IDS.events,
    },
    {
        id: 'site-menu-item-3',
        orderIndex: 3,
        title: "Новости",
        divId: DIV_IDS.news,
    },
    {
        id: 'site-menu-item-4',
        orderIndex: 4,
        title: "Экскурсоводы",
        divId: DIV_IDS.gids,
    },
    {
        id: 'site-menu-item-5',
        orderIndex: 5,
        title: "Контакты",
        divId: DIV_IDS.contacts,
    },
]