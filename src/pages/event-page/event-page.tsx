import { useEffect } from "react"
import { EventType } from "../../store/appSlice/types/app-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"
import dayjs from "dayjs"
import { DATE_TIME_FORMAT_1, LINE_DEVIDER } from "../../shared/consts"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"

import "./event-page.scss"

export const EventPage = () => {
    const dispatch = useAppDispatch()
    const events: EventType[] = useAppSelector(state => state.appSlice.events)

    useEffect(() => {
        dispatch(appSliceThunks.getEvents())
    }, [])

    return (
        <div className="chapter-wrapper">

            <ChapterTitle title="Все наши мероприятия" />

            {events.map(e => {
                return (
                    <div key={e.id} className="separate-page-card">
                        <h5>{dayjs(e.date).format(DATE_TIME_FORMAT_1)}</h5>
                        <h3>{e.title}</h3>

                        <img alt="" src={e.photo} />

                        <div>
                            {/* <p>{e.description}</p> */}
                            {
                                e.description.indexOf(LINE_DEVIDER) === -1
                                    ? <p>{e.description}</p>
                                    : <>
                                        {e.description.split(LINE_DEVIDER).map(paragraph => <p>{paragraph}</p>)}
                                    </>
                            }
                        </div>

                        {e.link && <a href={e.link}>{e.link}</a>}
                    </div>
                )
            })}
        </div>
    )
}