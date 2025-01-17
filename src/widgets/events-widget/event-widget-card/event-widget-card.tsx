import dayjs from "dayjs"
import { EventType } from "../../../store/appSlice/types/event-types"
import { DATE_TIME_FORMAT_1 } from "../../../shared/consts"

import "./event-widget-card.scss"

type PropsType = {
    event: EventType
}

export const EventWidgetCard = ( {event} : PropsType ) => {
    return (
        <div className="event-card-container">
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