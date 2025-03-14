import dayjs from "dayjs"
import { CustomButton } from "../../components/custom-button/custom-button"
import { EventType, NewType } from "../../store/appSlice/types/app-types"
import { DATE_TIME_FORMAT_1, LINE_DEVIDER } from "../../shared/consts"
import { BgLayout } from "../../components/bg-layout/bg-layout"
import { useAppDispatch } from "../../store/store"
import { appSliceActions } from "../../store/appSlice/model/app-slice"

import "./item-separate.scss"

import crossImg from "../../assets/icons/cross.svg"
import { v4 } from "uuid"

type PropsType = {
    item: EventType | NewType
}

export const ItemSeparateWidget = ( { item } : PropsType) => {
    const dispatch = useAppDispatch()

    const onCloseClick = () => {
        dispatch(appSliceActions.setShowItemId(null))
    }

    return (
        <BgLayout>
            <div className="item-separate-widget-container">

                <div className="item-separate-widget-upper-close">
                    <img alt="close" src={crossImg} onClick={onCloseClick}/>
                </div>

                { item.photo && 
                    <div 
                        className="item-separate-widget-image"
                        style={{
                            backgroundImage: `url(${item.photo})`,
                        }}
                    />
                }

                <div className="item-separate-widget-title">
                    {dayjs(item.date).format(DATE_TIME_FORMAT_1)}
                </div>

                <div className="item-separate-widget-title">
                    {item.title}
                </div>

                <div>
                    {
                        item.description.indexOf(LINE_DEVIDER) === -1
                            ? <p>{item.description}</p>
                            : <>
                                {item.description.split(LINE_DEVIDER).map(paragraph => <p key={v4()}> {paragraph}</p>)}
                            </>
                    }
                </div>

                {item.link && <a href={item.link}>{item.link}</a>}


                <CustomButton title="Закрыть" onBtnClick={onCloseClick} additionalStyles={"item-separate-widget-button"} />
            </div>
        </BgLayout>
    )
}