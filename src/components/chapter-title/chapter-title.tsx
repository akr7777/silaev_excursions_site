
import "./chapter-title.scss"

export const ChapterTitle = ({ title }: { title: string }) => {
    return (
        <div className="chapter-title">
            <h3>{title}</h3>
        </div>
    )
}