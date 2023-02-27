
export const card = (index, session) => {
    let div = `
            <div class="task_card dflex dflex_c dflex_spacae_betw">
                <span>${session.type}</span>
                <span>${session.recipient.displayableName}</span>  
                <span>${session.sessionDate.split("T")[0]} • ${session.sessionDate.split("T")[1].split("+")[0]}</span>
            </div>
    `

    return div
}