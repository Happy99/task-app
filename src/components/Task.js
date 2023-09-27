import "./Task.css"

const Task = (props) => {
    return (
        <div  className="oneTask">
            <h4>{props.name}</h4>
        </div>
    )
}

export default Task