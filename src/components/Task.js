import "./Task.css"

const Task = (props) => {

    const deleteTaskHandler = (taskId) => {
        const filteredTasks = props.myTasks.filter( (task) => {
            return (task.id !== taskId)
        })

        props.setMyTasks(filteredTasks)  
    }

    return (
        <div className="oneTask">
            <h4>{props.name}</h4>
            <button type="button" onClick={ () => deleteTaskHandler(props.id) }>Vymazat</button>
        </div>
    )
}

export default Task