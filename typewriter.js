const typeWriter = (text) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      process.stdout.write(text[i]);
    }, 50 * i);// Now the delay increases by 50ms for each character
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 50 * text.length);// Adds a newline character after every character is displayed
};

typeWriter("hello there from lighthouse labs");