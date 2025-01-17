import { EventType } from "../../../store/appSlice/types/event-types"
import "./event-card.scss"

type PropsType = {
    event: EventType
}

export const EventCard = ( {event} : PropsType ) => {
    return (
        <div className="event-card-container">
            <img alt="" src={event.photo} />
            <div>
                {event.date}
            </div>
            <div>
                {event.title}
            </div>
            <div>
                {event.description}
            </div>

            <div>Подробнее...</div>
        </div>
    )
}