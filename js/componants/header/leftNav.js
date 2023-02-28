import { avatar } from "../reusable/atomic/avatar.js"
export const leftNav = (profile) => {
    
    const av = avatar(profile);
    const nameArr = profile.displayName.split(" ")

    const name = nameArr[0][0].toUpperCase() + nameArr[nameArr.length-1][0].toUpperCase()
    
    const leftNv = `
        <div class="left_nav dflex dflex_center_v dflex_space_betw">
            ${av}
            <span class="user_name">${name}</span>
            <span> Mentor </span>
            <span>•</span>
            <span> Evaluateur </span>
        </div>
    `

    return leftNv;
}