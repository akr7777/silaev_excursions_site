import { useEffect, useState } from "react"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { DIV_IDS } from "../../shared/consts"
import { GidType } from "../../store/appSlice/types/app-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { Preloader } from "../../components/preloader/preloader"
import clsx from "clsx"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"
import { GidContactsWidget } from "../../components/gid-contacts/gid-contacts"
import noPhotoAvatar from "../../assets/images/contacts/avatar.png"
import { navFunction } from "../../shared/nav-function"
import { useNavigate } from "react-router"
import { PATHS } from "../../router/router"
import { CustomButton } from "../../components/custom-button/custom-button"

import "./gids-widget.scss"

export const GidsWidget = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const gids: GidType[] = useAppSelector(state => state.appSlice.gids)
    const isLoading: boolean = useAppSelector(state => state.appSlice.isGidsLoading)

    const [currentGid, setCurrentGid] = useState<GidType | undefined>(undefined)

    useEffect(() => {
        if (gids && gids.length > 0) {
            setCurrentGid(gids[0])
        }
    }, [gids])

    useEffect(() => {
        dispatch(appSliceThunks.getGids())
    }, [])

    const onGidCardClickHandler = (gid: GidType | undefined) => {
        if (gid) {
            setCurrentGid(gid)
            setTimeout(() => {
                navFunction({
                    divId: DIV_IDS.currentGidWidget, 
                    pagePath: PATHS.root, 
                    navigate
                })
            }, 300)
            
        }
    }

    const onShowAllGidsClick = () => {
        navFunction({
            divId: DIV_IDS.header,
            pagePath: PATHS.gids,
            navigate,
        })
    }

    return (
        <div className="chapter-wrapper chapter-wrapper-vertical-padding" id={DIV_IDS.gids}>
            <ChapterTitle title="Наши экскурсоводы" />

            {
                (gids.length === 0 || isLoading) ? <Preloader /> : (
                    <div className="gids-widget-container">

                        <div>
                            {currentGid && (
                                <div className="gids-widget-block-1" id={DIV_IDS.currentGidWidget}>

                                    <img 
                                        alt={currentGid.fullName} 
                                        src={currentGid.avatar ? currentGid.avatar : noPhotoAvatar} 
                                    />

                                    <center>
                                        <strong>{currentGid.fullName}</strong>
                                    </center>

                                    <div>
                                        {currentGid.description}
                                    </div>

                                    <GidContactsWidget contactsStr={currentGid.contactInfo}/>
                                    
                                </div>
                            )}
                        </div>

                        <div className="gids-widget-block-2">
                            {gids.map(g => {
                                const elStyle: string = clsx(
                                    "gids-widget-block-2-item",
                                    g.id === currentGid?.id && "gids-widget-block-2-item-selected"
                                )

                                return (
                                    <div className={elStyle} key={g.id} onClick={() => onGidCardClickHandler(g)}>
                                        {/* <img alt="" src={g.avatar ? g.avatar : noPhotoAvatar} /> */}

                                        <div style={{
                                                backgroundImage: `url("${g.avatar ? g.avatar : noPhotoAvatar}")`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '20px',
                                            }} 
                                        />
                                        {/* <div className="ttt" /> */}
                                        <center>{
                                            g.fullName.split(" ").length === 3
                                                ? g.fullName.split(" ")[0] + " " + g.fullName.split(" ")[1]
                                                : g.fullName
                                        }</center>
                                    </div>
                                )
                            })}
                        </div>

                        <div />

                    </div>
                )
            }

            <div className="common-btn-container chapter-wrapper-no-right-padding gids-widget-btn-margin">
                <CustomButton title={"Посмотреть всех экскурсоводов"} onBtnClick={onShowAllGidsClick} isBoldText={true} />
            </div>

        </div>
    )
}