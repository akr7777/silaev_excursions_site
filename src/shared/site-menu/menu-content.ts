type SiteMenuItemType = {
    title: string,
    divId: string,
    orderIndex: number,
}
export const siteMenuItems: SiteMenuItemType[] = [
    {
        orderIndex: 1,
        title: "О нас",
        divId: "about",
    },
    {
        orderIndex: 2,
        title: "Мероприятия",
        divId: "events",
    },
    {
        orderIndex: 3,
        title: "Новости",
        divId: "news",
    },
    {
        orderIndex: 4,
        title: "Экскурсоводы",
        divId: "gids",
    },
    {
        orderIndex: 5,
        title: "Контакты",
        divId: "contacts",
    },
]