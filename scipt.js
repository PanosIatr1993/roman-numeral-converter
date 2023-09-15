function convertToRoman(num) {
  let arabic = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ]
  let roman = "";

  for (let i=0; i<arabic.length; i++) {
    while (num>=arabic[i][1]) {
      roman += arabic[i][0];
      num -= arabic[i][1];
    }
  }

 return roman;
}

convertToRoman(36);
