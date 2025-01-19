import { useEffect } from "react"
import { NewType } from "../../store/appSlice/types/app-types"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"
import dayjs from "dayjs"
import { DATE_TIME_FORMAT_1 } from "../../shared/consts"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"

import "./news-page.scss"

export const NewsPage = () => {
    const dispatch = useAppDispatch()
    const news: NewType[] = useAppSelector(state => state.appSlice.news)

    useEffect(() => {
        dispatch(appSliceThunks.getNews())
    }, [])

    return (
        <div className="chapter-wrapper">

            <ChapterTitle title="Все наши новости" />

            {news.map(n => {
                return (
                    <div key={n.id} className="separate-page-card">
                        <h5>{dayjs(n.date).format(DATE_TIME_FORMAT_1)}</h5>
                        <h3>{n.title}</h3>

                        <img alt="" src={n.photo} />

                        <div>
                            <p>{n.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}