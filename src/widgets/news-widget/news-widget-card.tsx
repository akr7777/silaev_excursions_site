import { CustomButton } from "../../components/custom-button/custom-button"
import { NewType } from "../../store/appSlice/types/app-types"
import "./news-widget.scss"

export const NewsWidgetCard = ( { n } : { n: NewType }) => {

    const onButtonClickHandler = () => {}

    return (
        <div className="news-widget-card">
            <img alt="" src={n.photo} />
            <div className="news-widget-card-text">
                <h3>{n.title}</h3>
                <p>{n.description}</p>
                <CustomButton title="Подробнее" onBtnClick={onButtonClickHandler}/>
            </div>
        </div>
    )
}