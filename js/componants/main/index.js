import { column } from "./column.js"
import { getCall, MENTOR_DONE, MENTOR_TODO_COMPLETED } from "../../services/api.js";
import { dispatchSessionTypes } from "../../services/utils.js";


export const main = async () => {

    //const toDoList_and_completedList = await getCall(localStorage.getItem("token"), localStorage.getItem("uid"), "",MENTOR_TODO_COMPLETED);
    
    let mappedSessionList = await dispatchSessionTypes();
    console.log(mappedSessionList)

    let sectionList = ""

    for(let i=0 ; i < mappedSessionList.length ; i++) {
        sectionList = `${sectionList}${column(i, mappedSessionList[i])}`
    }

    const main = `
        <main>
            <div class="tasks dflex dflex_space_betw">
                ${sectionList}
            </div>
        </main>
    `
    
    return main
}