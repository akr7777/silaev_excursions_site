import { siteMenuItems } from "./menu-content"
import { MenuLink } from "./menu-link"

import "./site-menu.scss"

export const SiteMenuDesctop = () => {

    return (
        <nav className="nav-desctop">
            {siteMenuItems
                .sort((a,b) => a.orderIndex - b. orderIndex)
                .map(m => <MenuLink key={m.id} title={m.title} divId={m.divId}/>)}
        </nav>
    )
}