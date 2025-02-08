

import { useEffect } from "react"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"
import { GidType } from "../../store/appSlice/types/app-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { GidContactsWidget } from "../../components/gid-contacts/gid-contacts"

import "./gid-page.scss"
import { DIV_IDS } from "../../shared/consts"

export const GidsPage = () => {
    const dispatch = useAppDispatch()
    const gids: GidType[] = useAppSelector(state => state.appSlice.gids)

    useEffect(() => {
        dispatch(appSliceThunks.getGids())
    }, [])

    return (
        <div className="chapter-wrapper" id={DIV_IDS.allGidsPage}>

            <ChapterTitle title="Наши экскурсоводы" />

            {gids.map(g => {
                return (
                    <div key={g.id} className="gid-page">
                        {g.avatar ? <img 
                            alt={g.fullName}
                            src={g.avatar}
                        /> : <div />}

                        <div>
                            <h3>{g.fullName}</h3>
                            <div>{g.description}</div>
                            <GidContactsWidget contactsStr={g.contactInfo}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}