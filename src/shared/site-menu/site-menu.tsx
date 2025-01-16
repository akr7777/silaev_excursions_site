import "./site-menu.scss"

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
    }
]

export const SiteMenu = () => {
    return (
        <div>
            {siteMenuItems.map(m => {
                return (
                    <div>{m.title}</div>
                )
            })}
        </div>
    )
}