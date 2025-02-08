import { useNavigate } from "react-router"
import { PATHS } from "../../router/router"
import { navFunction, NavigateFunctionPropsType } from "../../shared/nav-function"

import "./site-menu.scss"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { appSliceActions } from "../../store/appSlice/model/app-slice"

type PropsType = {
    divId: string,
    title: string,
}

export const MenuLink = ({divId, title}: PropsType) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isMobileMenuShown: boolean = useAppSelector(state => state.appSlice.isMobileMenuShown)
    
    const onLinkClick = () => {
        const data: NavigateFunctionPropsType = {
            divId, 
            navigate,
            pagePath: PATHS.root,
        }
        if (isMobileMenuShown) {
            dispatch(appSliceActions.setMobileMenuShown(false))
        }
        navFunction(data)
    }

    return (
        <div onClick={onLinkClick} className="menu-link">
            {title}
        </div>
    )
} 