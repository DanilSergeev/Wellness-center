
const Line = ({children, title}) => {

    return (
        <div className="line">
            <div className="lineWrapper">
                <h1>{title}</h1>
                <p>{children}</p>
            </div>
        </div>
    )
}
export default Line