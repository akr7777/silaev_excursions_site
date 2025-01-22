import silaevPhoto from "../../assets/images/contacts/silaev.svg"
import krinitsinaPhoto from "../../assets/images/contacts/krinitsina.jpg"
import baranovskiyPhoto from "../../assets/images/contacts/baranovskiy.jpg"
import avatar from "../../assets/images/contacts/avatar.png"

export type ContactType = {
    photo: string,
    name: string,
    role: string,
    phone?: string,
    email: string,
}

export const contactsInfo: ContactType[] = [
    {
        name: "Александр Силаев",
        role: "Исполнительный директор",
        phone: "+7 (903) 159-24-19",
        email: "sasha-silaev@mail.ru",
        photo: silaevPhoto,
    },

    {
        name: "Анастасия-Вячеславовна Криницына",
        role: "Соруководитель",
        // phone: "+7 (903) 159-24-19",
        email: "asdis-hildr@yandex.ru",
        photo: krinitsinaPhoto,
    },
    {
        name: "Александр Александрович",
        role: "Соруководитель",
        phone: "+7 (916) 824-45-21",
        email: "sasha-silaev@mail.ru",
        photo: avatar,
    },
    {
        name: "Андрей Барановский",
        role: "Соруководитель",
        phone: "+7 (995) 114-78-64",
        email: "andrez18@rambler.ru",
        photo: baranovskiyPhoto,
    },
]