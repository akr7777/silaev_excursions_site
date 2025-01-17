import { ResizeType, useResize } from "../../hooks/use-resize/use-resize"
import { Logo } from "../../components/logo/logo"
import { SiteMenuDesctop } from "../../components/site-menu/site-menu-desctop"
import { SiteMenuMobile } from "../../components/site-menu/site-menu-mobile"

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