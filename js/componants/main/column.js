import { card } from "./card.js";

export const column = (index, sessionList) => {
    let title = ""
    switch (index) {
        case 0:
            title = "To Do ("+sessionList.length+")"
            break;
        case 1:
            title = "Done ("+sessionList.length+")"
            break;
        case 2:
            title = "Completed ("+sessionList.length+")"
            break;
        default:
            break;
    }

    let cardList = "";
    for(let i=0;i<sessionList.length;i++) {
        cardList = `${cardList}${card(sessionList[i])}`
    }

    const section = `
        <section class="tasks_section dflex dflex_c">
            <h2>${title} <button class="plusButton"> <i class="fa-solid fa-plus"></i> </button></h2>
            <div>
                ${cardList}
            </div>
        </section>
    `

    return section;
}