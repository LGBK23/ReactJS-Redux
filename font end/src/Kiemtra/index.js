
const { useRef } = require("react");
const { useState } = require("react");

function Index()
{
    const [tasks,setTasks]=useState([])
    const taskName=useRef()
    const addTask=()=>{
        const newTasks=tasks.concat(taskName.current.value)
        setTasks(newTasks);
    }
    const delTask=(name)=>{
        const newTasks=tasks.filter(function(task){
            return task!=name;
        });
        setTasks(newTasks);
    }
    return(
        <>
        <div className="">
            <h1 className="">TO DO LIST APP</h1>
            {/* <FormAddTask addTaskHandle={addTask} refTaskName={taskName}/>
            <ListOfTasks listTasks={tasks} delTaskHandler={delTask}/> */}
            <div className="">
                <label>Task name:</label>
                <input type="text" placeholder="Input name of task" ref={taskName}/>
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <h3>List of tasks:</h3>
                {
                    tasks.map(function(task,idx){
                        return(
                            <div key={idx}>
                                <p>{task}</p>
                                <button onClick={()=>delTask(task)}>X</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </>
    );
}
export default Index;