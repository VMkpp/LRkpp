function strikeStr(str) {
  if (typeof str !== "string") return "";
  const words = str.split(" ");

  if (words.length <= 3) {
    return str;
  }
  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += words[i] + " ";

    if ((i + 1) % 3 === 0 && i !== words.length - 1) {
      result += "\n";
    }
  }
  return result.trim();
}

console.log(strikeStr("Що я хотів би розповісти на цю тему:"));
console.log(strikeStr("Всім привіт!"));
