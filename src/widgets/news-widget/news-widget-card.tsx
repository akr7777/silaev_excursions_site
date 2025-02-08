import { v4 } from "uuid"
import { CustomButton } from "../../components/custom-button/custom-button"
import { LINE_DEVIDER } from "../../shared/consts"
import { appSliceActions } from "../../store/appSlice/model/app-slice"
import { NewType } from "../../store/appSlice/types/app-types"
import { useAppDispatch } from "../../store/store"

import "./news-widget.scss"

export const NewsWidgetCard = ( { n } : { n: NewType }) => {
    const dispatch = useAppDispatch()

    const onButtonClickHandler = () => {
        dispatch(appSliceActions.setShowItemId(n.id))
    }

    return (
        <div className="news-widget-card">

            <img alt={n.title} src={n.photo} />

            <div className="news-widget-card-text">
                <h3>{n.title}</h3>
                {/* <p>{n.description}</p> */}
                {
                    n.description.indexOf(LINE_DEVIDER) === -1
                        ? <p>{n.description}</p>
                        : <>
                            {n.description.split(LINE_DEVIDER).map(paragraph => <p key={v4()}>{paragraph}</p>)}
                        </>
                }
                <CustomButton title="Подробнее" onBtnClick={onButtonClickHandler}/>
            </div>

        </div>
    )
}