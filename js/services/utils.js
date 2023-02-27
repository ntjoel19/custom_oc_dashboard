import { getCall, MENTOR_PENDING_CR, MENTOR_DONE, MENTOR_COMING_SOON} from "./api.js";

export const dispatchSessionTypes = async () => {
    let pending = [];
    let arrTodo = [];
    let arrCompl = []

    let result = []

    pending = await getCall(localStorage.getItem("token"), localStorage.getItem("uid"), "", MENTOR_PENDING_CR);
    
    arrTodo = await getCall(localStorage.getItem("token"), localStorage.getItem("uid"), "", MENTOR_COMING_SOON)

    
    arrCompl = await getCall(localStorage.getItem("token"), localStorage.getItem("uid"), "", MENTOR_DONE,1)

    

    result.push(arrTodo, pending, arrCompl)
    
    return result
}
