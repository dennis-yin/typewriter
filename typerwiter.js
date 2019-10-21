const sentence = "hello there from lighthouse labs";
let delay = 50;

for (const char of sentence) {
  let ind = 0;
  setTimeout(() => {
    process.stdout.write(char)
  }, delay)
  delay += 50;
  ind++;
}

setTimeout(() => {
  process.stdout.write('\n')
}, delay);