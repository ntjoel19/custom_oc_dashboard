
export const dispatchSessionTypes = (toDoList_and_completedList) => {
    const arrDone = [];
    const arrTodo = [];
    const arrCompl = []

    const result = []

    for (let i=0;i<10;i++) {
        arrDone.push(toDoList_and_completedList[i]);
    }
    for (let i=10;i<20;i++) {
        arrTodo.push(toDoList_and_completedList[i]);
    }
    for (let i=20;i<30;i++) {
        arrCompl.push(toDoList_and_completedList[i]);
    }

    result.push(arrDone, arrTodo, arrCompl)

    return result
}