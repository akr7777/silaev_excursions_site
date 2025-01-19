import { ResizeType, useResize } from "../../hooks/use-resize/use-resize"
import { Logo } from "../../components/logo/logo"
import { SiteMenuDesctop } from "../../components/site-menu/site-menu-desctop"
import { SiteMenuMobile } from "../../components/site-menu/site-menu-mobile"
import { DIV_IDS } from "../../shared/consts"

import "./header.scss"

export const Header = () => {
    const screenWidth: ResizeType = useResize()

    return (
        <header className="header-container chapter-wrapper" id={DIV_IDS.header}>
            <Logo />
            {
                screenWidth.width > 870
                    ? <SiteMenuDesctop />
                    : <SiteMenuMobile />
            }
        </header>
    )
}