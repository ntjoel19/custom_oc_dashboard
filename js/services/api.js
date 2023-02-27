export const PROFILE = "PROFILE";
export const MENTOR_PROFILE = "MENTOR_PROFILE";
export const MENTOR_STUDENTS = "MENTOR_STUDENTS";
export const MENTOR_TODO_COMPLETED = "MENTOR_TODO_COMPLETED";
export const MENTOR_DONE = "MENTOR_DONE"
export const MENTOR_PENDING_CR = "MENTOR_PENDING_CR"
export const MENTOR_COMING_SOON = "MENTOR_COMING_SOON"

let path = ""

export const getCall = async (token, mentorId, sessionId, pathName, range) => {
    let dateFormated = (new Date()).toISOString().split(":")
    dateFormated = dateFormated[0]+":"+dateFormated[1]+":00Z"
    let headers = {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
    };
    switch (pathName) {
        case PROFILE:
            path = "auth/me";
            break;
        case MENTOR_PROFILE:
            path = `sessions/mentor/${mentorId}`;
            break;
        case MENTOR_STUDENTS:
            path = `sessions/mentor/${mentorId}/students`;
            break;
        case MENTOR_TODO_COMPLETED:
            path = `sessions/users/${mentorId}/events`;
            break;
        case MENTOR_PENDING_CR:
            path = `sessions/users/${mentorId}/sessions?actor=expert&life-cycle-status=pending&before=${dateFormated}&sort=sessionDate ASC`;
            break;
        case MENTOR_COMING_SOON:
            path = `sessions/users/${mentorId}/sessions?actor=expert&life-cycle-status=pending&after=${dateFormated}&sort=sessionDate ASC`;
            break;
        case MENTOR_DONE:
            path = `sessions/users/${mentorId}/sessions?actor=expert&life-cycle-status=canceled,completed,late canceled,marked student as absent&range=${range}`;
            break;
        default:
            break;
    }

    
    let result = await fetch(`http://localhost:3000/api/${path}`, {
        method: 'GET',
        headers: headers, 
    });

    let resultJson = await result.json();
    return resultJson
}
