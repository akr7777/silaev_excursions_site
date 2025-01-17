import "./custom-button.scss"


type PropsType = {
    title: string,
    onBtnClick: () => void
}


export const CustomButton = (props: PropsType) => {
    return (
        <button
            className="custom-button"
            onClick={props.onBtnClick}
        >
            {props.title}
        </button>
    )
}