import { useEffect, useState } from "react"
import { MyCarusel } from "../../shared/carusel-1/carusel"
import ReactCarusel from "../../shared/carusel-2/carusel"
import "./events.scss"
import { ResizeType, useResize } from "../../hooks/use-resize/use-resize"
import { EventType } from "../../store/appSlice/types/event-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"
import { EventCard } from "./event-card/event-card"
import { v4 } from "uuid"
import { ReactMultiCarusel } from "../../shared/carusel-3/milti-carusel"

export const Events = () => {
    const dispatch = useAppDispatch()
    const events: Array<EventType> = useAppSelector(state => state.appSlice.events)

    useEffect(() => {
        dispatch(appSliceThunks.getEvents())
    }, [])

    const devWidth: ResizeType = useResize()
    const [slidesCount, setSlidesCount] = useState<number>(5)
    const [height, setHeight] = useState<number>(400)

    useEffect(() => {
        
        if (devWidth.width > 1000) {
            setSlidesCount(3.2)
            setHeight(450)
        }

        if (devWidth.width > 840 && devWidth.width <= 1000) {
            setSlidesCount(3)
            setHeight(400)
        }

        if (devWidth.width > 650 && devWidth.width <= 840) {
            setSlidesCount(2.3)
            setHeight(500)
        }

        if (devWidth.width > 490 && devWidth.width <= 650) {
            setSlidesCount(1.5)
            setHeight(600)
        }
        if (devWidth.width <= 490) {
            setSlidesCount(1)
            setHeight(600)
        }

    }, [devWidth.width])

    return (
        <div className="chapter-wrapper-no-right-padding">
            <h3>Наши мероприятия</h3>

            {/* <MyCarusel 
                visibleSlides={3}
            /> */}
            
            {/* <ReactCarusel 
                slides={
                    !events ? [] : events.map(e => {
                        return (
                            <EventCard key={v4()} event={e}/>
                        )
                    }) 
                }
                slidesCount={slidesCount}
                // naturalSlideWidth={1000}
                // naturalSlideHeight={height}
                dots
                isButtonsOnSlides
            /> */}

            <ReactMultiCarusel slides={
                    !events ? [] : events.map(e => {
                        return (
                            <EventCard key={v4()} event={e}/>
                        )
                    }) 
                }/>
        </div>
    )
}