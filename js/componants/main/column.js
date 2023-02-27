import { card } from "./card.js";

export const column = (index, sessionList) => {
    let title = ""
    switch (index) {
        case 0:
            title = "Comming Soon Sessions("+sessionList.length+")"
            break;
        case 1:
            title = "Pending Sessions("+sessionList.length+")"
            break;
        case 2:
            title = "Completed Sessions("+sessionList.length+")"
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
            <h2 class="dflex dflex_space_betw">${title} </h2>
            <div>
                ${cardList}
            </div>
        </section>
    `

    return section;
}