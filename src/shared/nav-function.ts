import { NavigateFunction } from "react-router"

export type NavigateFunctionPropsType = {
    divId: string, 
    pagePath: string, 
    navigate: NavigateFunction
}

export const navFunction = ({divId, pagePath, navigate} : NavigateFunctionPropsType) => {
    
    navigate(pagePath)

    setTimeout(() => {
        const elem = document.getElementById(divId)
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth'})
        }
    }, 300)
}