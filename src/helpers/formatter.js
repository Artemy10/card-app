export function format(pattern, value) {
    const digits = value.replace(/\D/g, "").split("");
    let result = "";
    let digitsIndex = 0;

    for(let i = 0; i < pattern.length && digitsIndex < digits.length; i++) {
        if(pattern.charAt(i) === "#") {
            result += digits[digitsIndex];
            digitsIndex++;
        }
        else {
            result += pattern[i];
        }
    }
    return result;
}

export function formatName(value) {
    let result = ''; 
    let space = true;
    
    for(let i = 0; i < value.length; i++) {
        if (value[i] !== ' ') {
            result += value[i];
        }
        if(value[i] === ' ' && space) {
            result += value[i];
            space = false;
        }
    }

    return result.replace(/[^a-zA-Z\s]/g, "");
}