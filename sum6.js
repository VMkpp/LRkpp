function countOccurrences(numbers) {
    let map = new Map();

    for (let number of numbers) {

        if (map.has(number)) {
            map.set(number, map.get(number) + 1);
        } else {
            map.set(number, 1);
        }
    }

    return map;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];

const result = countOccurrences(numbers);

for (let [key, value] of result) {
    console.log(key + " => " + value);
}