const stringUtils = {
    isEmpty: str => {
        return !str || str === '';
    },
    isBlank: str => {
        return !str || str.trim() === '';
    },
};

export default stringUtils;
