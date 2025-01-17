import "./carusel.scss"
type ArrowPropsType = {
    isDisabled: boolean
    hugeArrow?: boolean
    isHover?: boolean
}

 const greenArrow = "#8AF451"


export const CaruselArrowBack = (props: ArrowPropsType) => {
    const arrowClassName = props.isDisabled ? "arrow disabled" : "arrow";
    return (
        <svg className={arrowClassName} width={props.hugeArrow ? 12 : 7} height={props.hugeArrow ? 20 : 10} viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill={props.isHover ? greenArrow : arrowClassName}
                d="M5 10L0 5L5 0L6.0625 1.0625L2.125 5L6.0625 8.9375L5 10Z" 
            />
        </svg>
    )
}

export const CaruselArrowForward = (props: ArrowPropsType) => {
    const arrowClassName = props.isDisabled ? "arrow disabled" : "arrow";

    return (
        <svg className={arrowClassName} width={props.hugeArrow ? 12 : 7} height={props.hugeArrow ? 20 : 10} viewBox="0 0 7 10" fill={'none'} xmlns="http://www.w3.org/2000/svg">
            <path
                fill={props.isHover ? greenArrow : arrowClassName}
                d="M4.875 5L0.9375 1.0625L2 0L7 5L2 10L0.9375 8.9375L4.875 5Z" 
            />
        </svg>
    )
}