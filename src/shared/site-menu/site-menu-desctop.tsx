import { v4 } from "uuid"
import { siteMenuItems } from "./menu-content"

import "./site-menu.scss"

export const SiteMenuDesctop = () => {
    return (
        <nav className="nav-desctop">
            {siteMenuItems
                .sort((a,b) => a.orderIndex - b. orderIndex)
                .map(m => {
                    return (
                        <a href={"#" + m.divId} key={v4()}>{m.title}</a>
                    )
                })}
        </nav>
    )
}