function replacer(match, p1, p2, p3, offset, string) {
    // p1 is non-digits, p2 digits, and p3 non-alphanumerics
    console.log(match, p1, p2, p3, offset, string);
    return [p1, p2, p3].join(' - ');
  }
  const newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
  console.log(newString);  // abc - 12345 - #$*%