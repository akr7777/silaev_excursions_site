import { Routes, Route } from "react-router";
import App from "../pages/app-page/App";
import { RootPage } from "../pages/app-page/root-page";
import { NotFoundPage } from "../pages/not-found-page/not-found-page";
import { EventPage } from "../pages/event-page/event-page";


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
                <Route path={PATHS.events} element={<EventPage />} />
            </Route>
           
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}