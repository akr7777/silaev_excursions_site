import clsx from "clsx"
import "./custom-button.scss"


type PropsType = {
    title: string,
    onBtnClick: () => void
    additionalStyles?: string
}


export const CustomButton = (props: PropsType) => {
    return (
        <button
            className={clsx(
                "custom-button",
                props.additionalStyles && props.additionalStyles
            )}
            onClick={props.onBtnClick}
        >
            {props.title}
        </button>
    )
}