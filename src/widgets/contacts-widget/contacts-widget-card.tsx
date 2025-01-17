import { ContactType } from "./contacts-widget-info"
import "./contacts-widget.scss"

export const ContactsWidgetCard = ({ c } : { c: ContactType }) => {
    return (
        <div className="contacts-widget-card">
            <img alt={c.name} src={c.photo} />
            <div>
                <div><strong>{c.name}</strong></div>
                <div>{c.role}</div>
                <div>
                    <a href={"tel:" + c.phone}>{c.phone}</a>
                </div>
                <div>
                    <a href={"mailto:" + c.email}>{c.email}</a>
                </div>
            </div>
        </div>
    )
}