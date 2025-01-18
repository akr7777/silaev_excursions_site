import { useState } from "react"
import { siteMenuItems } from "./menu-content"
import { MenuLink } from "./menu-link"

import burger from "../../assets/icons/burger-menu.svg"
import cross from "../../assets/icons/cross.svg"

import "./site-menu.scss"

export const SiteMenuMobile = () => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <nav className="nav-mobile">
            <img alt="Показать навигацию" src={burger} onClick={() => setShow(!show)} />

            {
                show && (
                    <div className="mobile-menu-area">

                        <img alt={"Закрыть меню навигации"} src={cross} onClick={() => setShow(false)}/>

                        {siteMenuItems
                            .sort((a,b) => a.orderIndex - b. orderIndex)
                            .map(m => <MenuLink divId={m.divId} title={m.title} key={m.id}/>)}
                    </div>
                )
            }
            
        </nav>
    )
}