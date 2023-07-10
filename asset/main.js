addEventListener('keydown', (event) => {
  const mappedAudio = document.querySelector(
    `audio[data-key='${event.keyCode}']`
  );
  const pressedKey = document.querySelector(
    `.key[data-key='${event.keyCode}']`
  );
  const warningModal = document.querySelector('.warning');

  if (pressedKey == null) {
    warningModal.classList.add('show');
    setTimeout(() => {
      warningModal.classList.remove('show');
    }, 600);
    return;
  } else {
    mappedAudio.currentTime = 0;
    mappedAudio.play();
    pressedKey.classList.add('playing');
  }
});

const test = document.querySelector('.keys');

test.addEventListener('click', (e) => {
  let newaudio;
  switch (e.target.className) {
    case 'clap':
      newaudio = new Audio('./sounds/clap.wav');
      newaudio.play();
      break;
    case 'hihat':
      newaudio = new Audio('../sounds/hihat.wav');
      newaudio.play();
      break;
    case 'kick':
      newaudio = new Audio('../sounds/kick.wav');
      newaudio.play();
      break;
    case 'openhat':
      newaudio = new Audio('../sounds/openhat.wav');
      newaudio.play();
      break;
    case 'boom':
      newaudio = new Audio('../sounds/boom.wav');
      newaudio.play();
      break;
    case 'ride':
      newaudio = new Audio('../sounds/ride.wav');
      newaudio.play();
      break;
    case 'snare':
      newaudio = new Audio('../sounds/snare.wav');
      newaudio.play();
      break;
    case 'tom':
      newaudio = new Audio('../sounds/tom.wav');
      newaudio.play();
      break;
    case 'tink':
      newaudio = new Audio('../sounds/tink.wav');
      newaudio.play();
      break;
    case 'hit':
      newaudio = new Audio('../sounds/hit.wav');
      newaudio.play();
      break;
    default:
      break;
  }
});

const allKeys = [...document.querySelectorAll('.key')];
allKeys.forEach((singleKey) =>
  singleKey.addEventListener('transitionend', (event) => {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  })
);
