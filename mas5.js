let styles = ["Jazz", "Blues"];

function showArray(step, arr) {
    console.log(`${step}) ${arr.join(", ")}`);
}

if (Array.isArray(styles) && styles.length > 0) {

    showArray(1, styles);

    styles.push("Rock-n-Roll");
    showArray(2, styles);

    if (styles.length % 2 !== 0) {
        let middleIndex = Math.floor(styles.length / 2);
        styles[middleIndex] = "Classics";
    } else {
        console.log("Масив має парну довжину!");
    }

    showArray(3, styles);

    let removed = styles.shift();

    if (removed !== undefined) {
        console.log(`4) Видалений елемент: ${removed}`);
    } else {
        console.log("Масив порожній!");
    }

    console.log(styles.join(", "));

    styles.unshift("Rap", "Reggae");
    showArray(5, styles);

} else {
    console.log("Помилка: масив не створений або порожній.");
}