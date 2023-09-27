import "./AllTasks.css"
import data from "../data"

import Task from "./Task"

const AllTasks = () => {
    return (
        <div className="all-tasks-wrapper">
            {
                data.map((oneTask) => {         
                    const {id, name} = oneTask
                    
                    return (
                        <Task key={id} name={name}/>
                    )         
                })
            }
        </div>
    )
}

export default AllTasks