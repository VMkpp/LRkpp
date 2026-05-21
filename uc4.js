function ucFirst(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("василь"));
console.log(ucFirst("javascript"));