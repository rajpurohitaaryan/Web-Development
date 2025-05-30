const messages = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function display(msg) {
  const line = document.createElement('div');
  line.innerHTML = `${msg}<span class="dots">.</span><span class="dots">.</span><span class="dots">.</span>`;
  document.body.append(line)
}

async function showMessages() {
  for (let msg of messages) {
    display(msg);

    const delay = Math.ceil(Math.random() * 7000) + 1000;
    await sleep(delay);
  }
}

showMessages();