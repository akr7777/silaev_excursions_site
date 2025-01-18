import { EventType, NewType } from "../../store/appSlice/types/app-types"
import { useAppSelector } from "../../store/store"
import { AboutWidget } from "../../widgets/about-widget/about-widget"
import { EventWidget } from "../../widgets/events-widget/events-widget"
import { GidsWidget } from "../../widgets/gids-widget/gids-widget"
import { ItemSeparateWidget } from "../../widgets/item-separate-widget/item-separate-widget"
import { NewsWidget } from "../../widgets/news-widget/news-widget"
import { WellcomeWidget } from "../../widgets/wellcome-widget/wellcome"

export const RootPage = () => {

    const events: EventType[] = useAppSelector(state => state.appSlice.events) 
    const news: NewType[] = useAppSelector(state => state.appSlice.news) 

    const showItemId: string | null = useAppSelector(state => state.appSlice.showItemId)

    const item: EventType | NewType | undefined = 
        events.some(e => e.id === showItemId)
            ? events.find(e => e.id === showItemId)
            : news.some(n => n.id === showItemId)
                ? news.find(n => n.id === showItemId)
                : undefined

    return (
        <>
            {showItemId && item && <ItemSeparateWidget item={item} />}

            <WellcomeWidget />
            <AboutWidget />
            <EventWidget />
            <NewsWidget />
            <GidsWidget />
        </>
    )
}