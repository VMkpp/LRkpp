function checkSpam(str) {
  if (typeof str !== "string") return false;
  str = str.toLowerCase();
  return str.includes("росі") || str.includes("xxx");
}

console.log(checkSpam("поїхати до росії"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));