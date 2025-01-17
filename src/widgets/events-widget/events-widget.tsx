import { EventType } from "../../store/appSlice/types/event-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { EventWidgetCard } from "./event-widget-card/event-widget-card"
import { ReactMultiCarusel } from "../../components/carusel-3/milti-carusel"
import { useNavigate } from "react-router"
import { CustomButton } from "../../components/custom-button/custom-button"
import { PATHS } from "../../router/router"
import { useEffect } from "react"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"

import "./events-widget.scss"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { Preloader } from "../../components/preloader/preloader"
import { DIV_IDS } from "../../shared/consts"

export const EventWidget = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const events: Array<EventType> = useAppSelector(state => state.appSlice.events)
    const isLoading: boolean = useAppSelector(state => state.appSlice.isEventsLoading)

    useEffect(() => {
        dispatch(appSliceThunks.getEvents())
    }, [])

    const onShowAllEvents = () => {
        navigate(PATHS.events)
    }

    return (
        <div className="chapter-wrapper-no-right-padding" id={DIV_IDS.events}>
            <ChapterTitle title="Наши мероприятия"/>

            { isLoading ? <Preloader /> : (
                <ReactMultiCarusel slides={
                !events ? [] : events.map(e => {
                    return (
                        <EventWidgetCard key={e.id} event={e}/>
                    )
                }) 
            }/>
            )}
            

            <div className="common-btn-container">
                <CustomButton title="Посмотреть все мероприятия" onBtnClick={onShowAllEvents} />
            </div>

        </div>
    )
}