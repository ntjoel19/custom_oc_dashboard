
export const avatar = (profile) => {
    console.log(profile)
    const img = `<img src=${profile.profilePicture} alt="user avatar"/>`
    return img;
}