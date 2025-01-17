import { Routes, Route } from "react-router";
import App from "../pages/app-page/App";
import { RootPage } from "../pages/app-page/root-page";


export const PATHS = {
    root: '/',
    events: '/events',
    news: '/news'
}

export const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.root} element={<App />} >
                <Route index element={<RootPage />} />
            </Route>
           
        </Routes>
    )
}