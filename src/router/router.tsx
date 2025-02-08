import { Routes, Route } from "react-router";
import App from "../pages/app-page/App";
import { RootPage } from "../pages/app-page/root-page";
import { NotFoundPage } from "../pages/not-found-page/not-found-page";
import { EventPage } from "../pages/event-page/event-page";
import { NewsPage } from "../pages/news-page/news-page";
import { GidsPage } from "../pages/gid-page/gid-page";


export const PATHS = {
    root: '/',
    events: '/events',
    news: '/news',
    gids: '/gids',
}

export const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.root} element={<App />} >
                <Route index element={<RootPage />} />
                <Route path={PATHS.events} element={<EventPage />} />
                <Route path={PATHS.news} element={<NewsPage />} />
                <Route path={PATHS.gids} element={<GidsPage />} />
            </Route>
           
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    )
}