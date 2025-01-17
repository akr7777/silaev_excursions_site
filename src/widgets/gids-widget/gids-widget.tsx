import { useEffect, useState } from "react"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { DIV_IDS } from "../../shared/consts"
import { GidType } from "../../store/appSlice/types/app-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { Preloader } from "../../components/preloader/preloader"
import clsx from "clsx"

import "./gids-widget.scss"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"

export const GidsWidget = () => {
    const dispatch = useAppDispatch()

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

    return (
        <div className="chapter-wrapper" id={DIV_IDS.gids}>
            <ChapterTitle title="Наши экскурсоводы" />

            {
                (gids.length === 0 || isLoading) ? <Preloader /> : (
                    <div className="gids-widget-container">

                        <div>
                            {currentGid && (
                                <div className="gids-widget-block-1">
                                    <center>
                                        <img alt={currentGid.fullName} src={currentGid.avatar} />
                                    </center>
                                    <center>
                                        {currentGid.fullName}
                                    </center>
                                    <div>
                                        {currentGid.description}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="gids-widget-block-2">
                            {gids.map(g => {
                                const elStyle: string = clsx(
                                    "gids-widget-block-2-item",
                                    g.id === currentGid?.id && "gids-widget-block-2-item-selected"
                                )

                                return <div className={elStyle} key={g.id}>
                                    <img alt="" src={g.avatar} />
                                    <div>{
                                        g.fullName.split(" ").length === 3
                                            ? g.fullName.split(" ")[0] + " " + g.fullName.split(" ")[1]
                                            : g.fullName
                                    }</div>
                                </div>
                            })}
                        </div>
                    </div>
                )
            }

        </div>
    )
}