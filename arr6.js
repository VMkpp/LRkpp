function unique(arr) {
    let result = [];

    for (let item of arr) {

        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

let values = [
    "Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare",
    ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O