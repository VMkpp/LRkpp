function sumSalaries(salaries) {

    let sum = 0;
    let values = Object.values(salaries);

    for (let salary of values) {
        sum += salary;
    }

    return sum;
}

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

alert(sumSalaries(salaries)); // 650