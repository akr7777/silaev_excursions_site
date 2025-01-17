import { EventType } from "../../store/appSlice/types/event-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { EventWidgetCard } from "./event-widget-card/event-widget-card"
import { v4 } from "uuid"
import { ReactMultiCarusel } from "../../shared/carusel-3/milti-carusel"
import { useNavigate } from "react-router"
import { CustomButton } from "../../components/custom-button/custom-button"
import { PATHS } from "../../router/router"
import { useEffect } from "react"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"

import "./events-widget.scss"

export const EventWidget = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const events: Array<EventType> = useAppSelector(state => state.appSlice.events)

    useEffect(() => {
        dispatch(appSliceThunks.getEvents())
    }, [])

    const onShowAllEvents = () => {
        navigate(PATHS.events)
    }

    return (
        <div className="chapter-wrapper-no-right-padding">
            <h3>Наши мероприятия</h3>

            <ReactMultiCarusel slides={
                !events ? [] : events.map(e => {
                    return (
                        <EventWidgetCard key={v4()} event={e}/>
                    )
                }) 
            }/>

            <div className="events-btn-container">
                <CustomButton title="Посмотреть все мероприятия" onBtnClick={onShowAllEvents} />
            </div>

        </div>
    )
}