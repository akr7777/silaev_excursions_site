import { GidContactType } from "../../store/appSlice/types/app-types"
import { decodeContactsFromString } from "../../shared/contact-function"

import "./gid-contacts.scss"

import phoneIcon from "../../assets/icons/contact-icons/phone-icon.png"
import emailIcon from "../../assets/icons/contact-icons/email-icon.png"
import telegramIcon from "../../assets/icons/contact-icons/telegram-icon.png"
import vkIcon from "../../assets/icons/contact-icons/vk-icon.png"
import rutubeIcon from "../../assets/icons/contact-icons/rutube-icon.jpg"
import youtubeIcon from "../../assets/icons/contact-icons/youtube-icon.png"

type PropsType = {
    contactsStr: string | undefined
}

export const GidContactsWidget = ( { contactsStr } : PropsType ) => {

    // {currentGid.contactInfo && Object.entries(decodeContactsFromString(currentGid.contactInfo))
    //     .map(([key, value]) => (
    //         <div key={v4()}>
    //             {`${key}: ${value}`}
    //         </div>
    //     ))
    //     // .map(el => <div key={v4()}>{el}</div>)
    // }

    const contacts: GidContactType = contactsStr ? decodeContactsFromString(contactsStr) : {}

    return (
        <div className="gid-widget-contacts-container">

            {contacts.phone &&
                <a href={`tel:${contacts.phone}`}>
                    <div className="gid-widget-contacts-block">
                        <img alt="Телефон" src={phoneIcon} />
                        <div>{contacts.phone}</div>
                    </div>
                </a>
            }

            {contacts.email &&
                <a href={`mailto:${contacts.email}`}>
                    <div className="gid-widget-contacts-block">
                        <img alt="Почта" src={emailIcon} />
                        <div>{contacts.email}</div>
                    </div>
                </a>
            }

            {contacts.telegram &&
            // <a href="https://t.me/agvento1">Написать автору</a>
                <a href={`https://t.me/${contacts.telegram}`}>
                    <div className="gid-widget-contacts-block">
                        <img alt="Telegram" src={telegramIcon} />
                        <div>{contacts.telegram}</div>
                    </div>
                </a>
            }

            {contacts.vk &&
                <a href={contacts.vk}>
                    <div className="gid-widget-contacts-block">
                        <img alt="Vkontante" src={vkIcon} />
                        <div>{contacts.vk}</div>
                    </div>
                </a>
            }

            {contacts.youtube &&
                <a href={contacts.youtube}>
                    <div className="gid-widget-contacts-block">
                        <img alt="youtube" src={youtubeIcon} />
                        <div>{contacts.youtube}</div>
                    </div>
                </a>
            }

            {contacts.rutube &&
                <a href={contacts.rutube}>
                    <div className="gid-widget-contacts-block">
                        <img alt="rutube" src={rutubeIcon} />
                        <div>{contacts.rutube}</div>
                    </div>
                </a>
            }

        </div>
    )
}