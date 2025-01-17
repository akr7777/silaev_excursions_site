import { useNavigate } from "react-router"
import { PATHS } from "../../router/router"
import { navFunction, NavigateFunctionPropsType } from "../../shared/nav-function"

import "./site-menu.scss"

type PropsType = {
    divId: string,
    title: string,
}

export const MenuLink = ({divId, title}: PropsType) => {
    const navigate = useNavigate()

    const onLinkClick = () => {
        const data: NavigateFunctionPropsType = {
            divId, 
            navigate,
            pagePath: PATHS.root,
        }
        navFunction(data)
    }

    return (
        <div onClick={onLinkClick} className="menu-link">
            {title}
        </div>
    )
} 