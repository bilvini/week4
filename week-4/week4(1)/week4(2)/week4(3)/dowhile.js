let input;

do {
  input = prompt("Enter a word (type 'stop' to quit):");
  console.log("You entered:", input);
} while (input !== "stop");