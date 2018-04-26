export const loadState = () => {
    try {
        const loadedState = localStorage.getItem('state');
        if (loadedState === null) {
            return undefined;
        }
        return JSON.parse(loadedState);
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
        console.log(error)
    }
}