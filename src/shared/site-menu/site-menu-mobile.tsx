import { useState } from "react"
import { siteMenuItems } from "./menu-content"

import "./site-menu.scss"

import burger from "../../assets/icons/burger-menu.svg"
import cross from "../../assets/icons/cross-30.png"

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
                            .map(m => {
                                return (<a href={"#" + m.divId}>{m.title}</a>)
                        })}
                    </div>
                )
            }
            
        </nav>
    )
}