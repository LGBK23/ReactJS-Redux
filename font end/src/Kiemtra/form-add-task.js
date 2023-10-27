const { useRef } = require("react");
const { useDispatch } = require("react");
const { add } = require("react");
function FormAddTask(){
    
    const taskName=useRef()
    const dispatch=useDispatch();
    const addTask=()=>{
        dispatch(add(taskName.current.value));
    }
    return(
        <div className="">
                <label>Task name:</label>
                <input type="text"  ref={taskName}/>
                <button onClick={addTask}>Add</button>
            </div>
    );
}
export default FormAddTask;