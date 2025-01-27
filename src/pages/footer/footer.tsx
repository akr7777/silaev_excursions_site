import "./footer.scss"

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="chapter-wrapper chapter-wrapper-vertical-padding">
            <label>Союз вольных экскурсоводов России</label>
            <label>{year}</label>
        </footer>
    )
}