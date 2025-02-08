import { EventType } from "../../store/appSlice/types/app-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { EventWidgetCard } from "./event-widget-card/event-widget-card"
import { ReactMultiCarusel } from "../../components/carusel-3/milti-carusel"
import { useNavigate } from "react-router"
import { CustomButton } from "../../components/custom-button/custom-button"
import { PATHS } from "../../router/router"
import { useEffect, useState } from "react"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { Preloader } from "../../components/preloader/preloader"
import { DIV_IDS } from "../../shared/consts"

import "./events-widget.scss"
import { navFunction } from "../../shared/nav-function"

export const EventWidget = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const events: Array<EventType> = useAppSelector(state => state.appSlice.events)
    const isLoading: boolean = useAppSelector(state => state.appSlice.isEventsLoading)
    const showItemId: string | null = useAppSelector(state => state.appSlice.showItemId)

    useEffect(() => {
        dispatch(appSliceThunks.getEvents())
    }, [])

    const onShowAllEvents = () => {
        // navigate(PATHS.events)
        navFunction({ divId: DIV_IDS.header, pagePath: PATHS.events, navigate})
    }

    return (
        <div className="chapter-wrapper-no-right-padding chapter-wrapper-vertical-padding" id={DIV_IDS.events}>

            <ChapterTitle title="Наши мероприятия"/>

            { isLoading ? <Preloader /> : (<>
                {!showItemId && events.length > 0 &&
                    <ReactMultiCarusel slides={
                        !events ? [] : events.map(e => {
                            return (
                                <EventWidgetCard key={e.id} event={e}/>
                            )
                        }) 
                    }/>
                }
                
            </>)}

            {events.length <= 0 && <div>Пока нет активных мероприятий</div>}
            

            {events.length > 0 && 
                <div className="common-btn-container chapter-wrapper">
                    <CustomButton title="Посмотреть все мероприятия" onBtnClick={onShowAllEvents} isBoldText={true} />
                </div>
            }

        </div>
    )
}