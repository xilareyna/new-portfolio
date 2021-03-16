function turnStrIntoArray(str) {
  const temp = "";
  const arr = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      if (temp != "") {
        arr.push(temp);
      }
    } else {
      temp = temp + str[i];
    }
  }

  return arr;
}

function turnArrIntoReverseString(arr) {
  const result = "";
  for (i = arr.length - 1; i >= 0; i--) {
    result = result + arr[i];

    if (i != 0) {
      result = result + " ";
    }
  }

  return result;
}
