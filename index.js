
let msg = "hii";

let i = 0;
let interval = setInterval(() => {
  if (i < msg.length) {
       ProcessingInstruction(msg[i]);
    i++;
  } else {
    clearInterval(interval);
  }
}, 1000);

