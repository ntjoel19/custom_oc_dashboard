export const PROFILE = "PROFILE";
export const MENTOR_PROFILE = "MENTOR_PROFILE";
export const MENTOR_STUDENTS = "MENTOR_STUDENTS";
export const MENTOR_TODO_COMPLETED = "MENTOR_TODO_COMPLETED";
export const MENTOR_DONE = "MENTOR_DONE"

let path = ""

export const getCall = async (token, mentorId, sessionId, pathName) => {
    switch (pathName) {
        case PROFILE:
            path = "me";
            break;
        case MENTOR_PROFILE:
            path = `mentor/${mentorId}`;
            break;
        case MENTOR_STUDENTS:
            path = `mentor/${mentorId}/students`;
            break;
        case MENTOR_TODO_COMPLETED:
            path = `users/${mentorId}/events`;
            break;
        case MENTOR_DONE:
            path = `presentation-sessions/${sessionId}/projet-session`;
            break;
        default:
            break;
    }
    console.log(`Bearer ${token}`)
    let result = await fetch(`https://api.openclassrooms.com/${path}`, {
        method: 'GET',
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'authorization, content-type',
            'Origin': 'http://127.0.0.1:8080',
            "referer": "https://openclassrooms.com/"
        }
    });

    let resultJson = await result.json();
    return resultJson
}
