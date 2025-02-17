import { useNavigate } from "react-router"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { NewType } from "../../store/appSlice/types/app-types"
import { Preloader } from "../../components/preloader/preloader"
import { NewsWidgetCard } from "./news-widget-card"
import { CustomButton } from "../../components/custom-button/custom-button"
import { PATHS } from "../../router/router"
import { useEffect } from "react"
import { appSliceThunks } from "../../store/appSlice/model/app-thunks"

import "./news-widget.scss"
import { DIV_IDS } from "../../shared/consts"
import { navFunction } from "../../shared/nav-function"

export const NewsWidget = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const news: NewType[] = useAppSelector(state => state.appSlice.news)
    const isLoading: boolean = useAppSelector(state => state.appSlice.isNewsLoading)

    useEffect(() => {
        dispatch(appSliceThunks.getNews())
    }, [])

    const onNewsPageNavClick = () => {
        // navigate(PATHS.news)
        navFunction({ divId: DIV_IDS.header, pagePath: PATHS.news, navigate})
    }

    return (
        <div className="chapter-wrapper news-widget-container chapter-wrapper-vertical-padding" id={DIV_IDS.news}>
            <ChapterTitle title="Наши новости" />

            {isLoading ? <Preloader /> : (<>
                {news.length > 0 
                ? news
                    .slice(0, 3)
                    .map(n => <NewsWidgetCard n={n} key={n.id} />)
                : <div>Пока нет новостей</div>
                }
            </>)}

            <div className="common-btn-container">
                <CustomButton title="Посмотреть все новости" onBtnClick={onNewsPageNavClick} isBoldText={true} />
            </div>
        </div>
    )
}