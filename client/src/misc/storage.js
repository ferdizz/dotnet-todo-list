export const getData = (key) => {
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}

export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}