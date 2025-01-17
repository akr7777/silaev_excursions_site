import "./logo.scss"

import logo from "../../assets/images/logo.svg"

export const Logo = () => {
    return (
        <img alt="logo" src={logo} className="logo-image"/>
    )
}