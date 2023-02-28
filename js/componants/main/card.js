
export const card = (index, session) => {
    let div = `
        <a href="">
            <div class="task_card dflex dflex_c dflex_space_betw">
                <h3>${session.type}</h3>
                <em>${session.recipient.displayableName}</em>  
                <span>${session.sessionDate.split("T")[0]} • ${session.sessionDate.split("T")[1].split("+")[0]}</span>
            </div>
        </a>
    `

    return div
}