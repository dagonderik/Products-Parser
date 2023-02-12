const findSubstring = (str) => {
  let startIndex = str.indexOf("{");
  let endIndex = str.indexOf("}");

  if (startIndex !== -1 && endIndex !== -1) {
    return str.substring(startIndex, endIndex + 1);
  } else {
    return null;
  }
};

export default findSubstring;