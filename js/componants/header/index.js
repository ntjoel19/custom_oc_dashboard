import { getCall, PROFILE, MENTOR_PROFILE } from "../../services/api.js"
import { leftNav } from "./leftNav.js";
import { rightNav } from "./rightNav.js";


export const header = async () => {
    const profile = await getCall(localStorage.getItem("token"),"","",PROFILE);
    
    const headerDom = `
        <header class="dflex dflex_center_v dflex_space_betw">
            ${leftNav(profile)}
            ${rightNav()}
        </header>
    `

    return headerDom
}