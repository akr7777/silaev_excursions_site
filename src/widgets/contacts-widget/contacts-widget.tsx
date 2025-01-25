import { v4 } from "uuid"
import { ChapterTitle } from "../../components/chapter-title/chapter-title"
import { contactsInfo } from "./contacts-widget-info"
import { ContactsWidgetCard } from "./contacts-widget-card"
import { DIV_IDS } from "../../shared/consts"

import "./contacts-widget.scss"

export const ContactsWidget = () => {
    return (
        <div className="chapter-wrapper" id={DIV_IDS.contacts}>
            <ChapterTitle title="Наши контакты" />

            <div className="contacts-widget-description">
                В разделе "Контакты" мы готовы ответить на все ваши вопросы и помочь с организацией тура. 
                Вы можете связаться с нами удобным для вас способом
            </div>

            <div className="contacts-widget-list">
                {contactsInfo.map(c => <ContactsWidgetCard c={c} key={v4()} />)}
            </div>

        </div>
    )
}