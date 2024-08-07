const capitalize = (str) => {
    if(str.length === 0) {
        return str;
    }

    if(str.length === 1) {
        return str.toUpperCase();
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
    capitalize
}