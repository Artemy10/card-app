export function classes(description) {
    let classes = '';
    for(let key in description) {
        if(description[key]) {
            classes += key;
        }
    }
    return classes;
}
