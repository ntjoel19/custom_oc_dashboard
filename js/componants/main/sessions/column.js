import { card } from "./card.js";

export const column = (index, sessionList) => {
    let title = ""
    switch (index) {
        case 0:
            title = "<i class='fa-regular fa-square-caret-right'></i> <span>Coming Soon</span><span>"+sessionList.length+"<span>"
            break;
        case 1:
            title = "<i class='fa-solid fa-spinner'></i><span>Pending</span><span>"+sessionList.length+"</span>"
            break;
        case 2:
            title = "<i class='fa-regular fa-circle-check'></i><span>Completed</span><span>"+sessionList.length+"+</span>"
            break;
        default:
            break;
    }

    let cardList = "";
    for(let i=0;i<sessionList.length;i++) {
        cardList = `${cardList}${card(index, sessionList[i])}`
    }

    const section = `
        <section class="tasks_section dflex dflex_c">
            <h2 class="column_title dflex dflex_space_betw">${title} </h2>
            <div class="tasks_list">
                ${cardList}
            </div>
        </section>
    `

    return section;
}