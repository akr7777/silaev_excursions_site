import "./wellcome.scss"

import wellcomeBg from "../../assets/images/wellcome-bg-1.svg"

export const WellcomeWidget = () => {
    return (
        <div className="wellcome-container chapter-wrapper">
            <img alt="" src={wellcomeBg} />
        </div>
    )
}