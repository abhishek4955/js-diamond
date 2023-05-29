function createDiamond(rows) {
  // Number of spaces and asterisks in the middle row
  var spaces = rows - 1;
  var asterisks = 1;

  // Upper half of the diamond
  for (var i = 0; i < rows; i++) {
    var row = '';
    for (var j = 0; j < spaces; j++) {
      row += ' ';
    }
    for (var k = 0; k < asterisks; k++) {
      row += '*';
    }
    console.log(row);

    spaces--;
    asterisks += 2;
  }

  // Lower half of the diamond
  spaces = 1;
  asterisks = (rows * 2) - 3;
  for (var i = 0; i < rows - 1; i++) {
    var row = '';
    for (var j = 0; j < spaces; j++) {
      row += ' ';
    }
    for (var k = 0; k < asterisks; k++) {
      row += '*';
    }
    console.log(row);

    spaces++;
    asterisks -= 2;
  }
}

// Example usage: create a diamond with 5 rows
createDiamond(5);
