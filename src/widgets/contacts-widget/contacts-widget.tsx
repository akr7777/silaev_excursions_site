import { v4 } from "uuid"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { contactsInfo } from "./contacts-widget-info"
import { ContactsWidgetCard } from "./contacts-widget-card"
import { DIV_IDS } from "../../shared/consts"

import "./contacts-widget.scss"

import tgIcon from "../../assets/icons/telegram-icon.png"
import vkIcon from "../../assets/icons/vk-icon.png"

export const ContactsWidget = () => {
    const tgLink = import.meta.env.VITE_TG_CHANNEL_LINK as string
    const vkLink = import.meta.env.VITE_VK_CHANNEL_LINK as string

    return (
        <div className="chapter-wrapper chapter-wrapper-vertical-padding" id={DIV_IDS.contacts}>
            <ChapterTitle title="Наши контакты" />

            <div className="contacts-widget-description">
                <p>
                    В разделе "Контакты" мы готовы ответить на все ваши вопросы и помочь с организацией тура. 
                    Вы можете связаться с нами удобным для вас способом
                </p>

                <div className="contacts-widget-social-links">
                    <a href={tgLink}>
                        <div className="contacts-widget-social-one-link">
                            <img alt="Наш канал в Телеграм" src={tgIcon} />
                            <div>Наш канал в Телеграм</div>
                        </div>
                    </a>
                    <a href={vkLink}>
                        <div className="contacts-widget-social-one-link">
                            <img alt="Наш канал в VK" src={vkIcon} />
                            <div>Наш канал в VK</div>
                        </div>
                    </a>
                </div>
                
            </div>

            


            <div className="contacts-widget-list">
                {contactsInfo.map(c => <ContactsWidgetCard c={c} key={v4()} />)}
            </div>

        </div>
    )
}