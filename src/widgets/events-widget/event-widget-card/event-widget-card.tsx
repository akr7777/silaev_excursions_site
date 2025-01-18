import dayjs from "dayjs"
import { EventType } from "../../../store/appSlice/types/app-types"
import { DATE_TIME_FORMAT_1 } from "../../../shared/consts"

import "./event-widget-card.scss"
import { useAppDispatch } from "../../../store/store"
import { appSliceActions } from "../../../store/appSlice/model/app-slice"

type PropsType = {
    event: EventType
}

export const EventWidgetCard = ( {event} : PropsType ) => {
    const dispatch = useAppDispatch()
    
    const onOpenEventClick = () => {
        dispatch(appSliceActions.setShowItemId(event.id))
    }

    return (
        <div 
            className="event-card-container"
            onClick={onOpenEventClick}
        >
            <img alt="" src={event.photo} />
            <div>
                {dayjs(event.date).format(DATE_TIME_FORMAT_1)}
            </div>
            <div>
                {event.title}
            </div>
            <div className="event-card-description">
                {event.description}
            </div>

            <div>Подробнее...</div>
        </div>
    )
}