function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введіть число:");
      
        if (value === null || value.trim() === "" || !isFinite(value)) {
            break;
        }

        numbers.push(Number(value));
    }
  
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert("Сума чисел: " + sumInput());