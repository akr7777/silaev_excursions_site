import dayjs from "dayjs"
import { EventType } from "../../../store/appSlice/types/app-types"
import { DATE_TIME_FORMAT_1, LINE_DEVIDER } from "../../../shared/consts"
import { useAppDispatch } from "../../../store/store"
import { appSliceActions } from "../../../store/appSlice/model/app-slice"
import { CustomButton } from "../../../components/custom-button/custom-button"

import "./event-widget-card.scss"
import { v4 } from "uuid"

type PropsType = {
    event: EventType
}

export const EventWidgetCard = ( {event} : PropsType ) => {
    const dispatch = useAppDispatch()
    
    const onOpenEventClick = () => {
        dispatch(appSliceActions.setShowItemId(event.id))
    }

    const onButtonClikc = () => {
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
                {/* {event.description} */}
                {
                    event.description.indexOf(LINE_DEVIDER) === -1
                        ? <p>{event.description}</p>
                        : <>
                            {event.description.split(LINE_DEVIDER).map(paragraph => <p key={v4()}>{paragraph}</p>)}
                        </>
                }
            </div>

            {/* <div>Подробнее...</div> */}
            <CustomButton title="Подробнее..." onBtnClick={onButtonClikc} />
        </div>
    )
}