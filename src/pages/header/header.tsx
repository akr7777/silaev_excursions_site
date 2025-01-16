import { Logo } from "../../shared/logo/logo"
import { SiteMenu } from "../../shared/site-menu/site-menu"

import "./header.scss"

export const Header = () => {
    return (
        <header className="header-container chapter-wrapper">
            <Logo />
            <SiteMenu />
        </header>
    )
}