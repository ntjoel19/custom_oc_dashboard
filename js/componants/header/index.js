import { getCall, PROFILE, MENTOR_PROFILE } from "../../services/api.js"
import { avatar } from "../reusable/atomic/avatar.js";
import { leftNav } from "./leftNav.js";
import { rightNav } from "./rightNav.js";


export const main = async () => {
    const profile = await getCall(localStorage.getItem("token"),"","",PROFILE);
    console.log(profile)
    const mainDom = `
        <main class="dflex dflex_center_v .dflex_space_betw">
            ${leftNav()}
            ${rightNav()}
        </main>
    `

    return mainDom
}