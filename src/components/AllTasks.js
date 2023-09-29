import "./AllTasks.css"
import data from "../data"
import { useState } from "react"

import Task from "./Task"

const AllTasks = () => {
    const [myTasks, setMyTasks] = useState(data)

    const deleteAllTasksHanlder = () => {
        setMyTasks([])
    }

    return (
        <div className="all-tasks-wrapper">
            {
                myTasks.map((oneTask) => {         
                    const {id, name} = oneTask
                    
                    return (
                        <Task 
                            key={id} 
                            name={name} 
                            id={id} 
                            myTasks={myTasks} 
                            setMyTasks={setMyTasks}
                        />                    
                    )         
                })
            }
            <button type="submit" className="delete-all" onClick={deleteAllTasksHanlder}>Delete all</button>
        </div>
    )
}

export default AllTasks