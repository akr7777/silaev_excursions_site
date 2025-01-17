import { ResizeType, useResize } from "../../hooks/use-resize/use-resize"
import { Logo } from "../../shared/logo/logo"
import { SiteMenuDesctop } from "../../shared/site-menu/site-menu-desctop"
import { SiteMenuMobile } from "../../shared/site-menu/site-menu-mobile"

import "./header.scss"

export const Header = () => {
    const screenWidth: ResizeType = useResize()

    return (
        <header className="header-container chapter-wrapper">
            <Logo />
            {
                screenWidth.width > 870
                    ? <SiteMenuDesctop />
                    : <SiteMenuMobile />
            }
        </header>
    )
}