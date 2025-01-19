import silaevPhoto from "../../assets/images/contacts/silaev.svg"

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
        photo: silaevPhoto,
    },
    {
        name: "Александр Александрович",
        role: "Соруководитель",
        phone: "+7 (916) 824-45-21",
        email: "sasha-silaev@mail.ru",
        photo: silaevPhoto,
    },
    {
        name: "Андрей Барановский",
        role: "Соруководитель",
        phone: "+7 (995) 114-78-64",
        email: "andrez18@rambler.ru",
        photo: silaevPhoto,
    },
]