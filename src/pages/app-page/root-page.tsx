import { AboutWidget } from "../../widgets/about-widget/about-widget"
import { EventWidget } from "../../widgets/events-widget/events-widget"
import { GidsWidget } from "../../widgets/gids-widget/gids-widget"
import { NewsWidget } from "../../widgets/news-widget/news-widget"
import { WellcomeWidget } from "../../widgets/wellcome-widget/wellcome"

export const RootPage = () => {
    return (
        <>
            <WellcomeWidget />
            <AboutWidget />
            <EventWidget />
            <NewsWidget />
            <GidsWidget />
        </>
    )
}