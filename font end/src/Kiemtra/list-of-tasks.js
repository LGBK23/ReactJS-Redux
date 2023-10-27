function ListOfTasks({ listTasks, delTaskHandler }) {
    return (
        <div>
            <h3>List of tasks:</h3>
            {
                listTasks.map(function (task, idx) {
                    return (
                        <div key={idx}>
                            <p>{task}</p>
                            <button onClick={() => delTaskHandler(task)}>X</button>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ListOfTasks;