function jsonToString(name, lastName, hairColor) {
    let user = {
        name,
        lastName,
        hairColor
    }

    return JSON.stringify(user);
}