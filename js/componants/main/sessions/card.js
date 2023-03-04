
export const card = (index, session) => {
    let div = `
        <a href="">
            <div class="task_card dflex dflex_c dflex_space_betw">
                <h3 class="dflex dflex_space_betw"><span>${session.type}</span><span class="projectLevel dflex dflex_center_h dflex_center_v">${session.projectLevel}</span></h3>
                <em>${session.recipient.displayableName}</em>  
                <span>${session.projectTitle}</span>
                <span>${session.sessionDate.split("T")[0]} • ${session.sessionDate.split("T")[1].split("+")[0]}</span>
            </div>
        </a>
    `

    return div
}