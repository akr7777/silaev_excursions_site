import { siteMenuItems } from "./menu-content"
import { MenuLink } from "./menu-link"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { appSliceActions } from "../../store/appSlice/model/app-slice"

import burger from "../../assets/icons/burger-menu.svg"
import cross from "../../assets/icons/cross.svg"

import "./site-menu.scss"


export const SiteMenuMobile = () => {

    const dispatch = useAppDispatch()
    const isMobileMenuShown: boolean = useAppSelector(state => state.appSlice.isMobileMenuShown)

    const setMobileMenuShownStatus = (newState: boolean) => {
        dispatch(appSliceActions.setMobileMenuShown(newState))
    }

    return (
        <nav className="nav-mobile">
            <div>
                <img alt="Показать навигацию" src={burger} onClick={() => setMobileMenuShownStatus(!isMobileMenuShown)} />
            </div>

            {
                isMobileMenuShown && (
                    <div className="mobile-menu-area">

                        <div className="nav-mobile-cross-div">
                            <img alt={"Закрыть меню навигации"} src={cross} onClick={() => setMobileMenuShownStatus(false)}/>
                        </div>

                        {siteMenuItems
                            .sort((a,b) => a.orderIndex - b. orderIndex)
                            .map(m => <MenuLink divId={m.divId} title={m.title} key={m.id}/>)}
                    </div>
                )
            }
            
        </nav>
    )
}