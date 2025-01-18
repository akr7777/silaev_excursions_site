import { PropsWithChildren } from "react"
import "./bg-layout.scss"

export const BgLayout = ({ children } : PropsWithChildren) => {
    return (
        <div className="bg-layout">
            {children}
        </div>
    )
}