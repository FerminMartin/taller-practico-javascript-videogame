const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
<<<<<<< HEAD
  let canvasSize;

  if (window.innerHeight > window.innerWidth ) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  const elementsSize = canvasSize / 10;

  console.log({ canvasSize, elementsSize });

  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';
  
  for (let i = 1; i <= 10; i++) {
    game.fillText(emojis['X'], elementsSize, elementsSize * i);
  
  }
  


  // window.innerHeight
  // window.innerWidth
  
=======
>>>>>>> dc66f9259db19bed8d73a3a43b35ca2d51d84bfc
  // game.fillRect(0,50,100,100);
  // game.clearRect(50,50,50,50);
  // game.clearRect());

<<<<<<< HEAD
  // game.font = '25px Verdana'
  // game.fillStyle = 'purple';
  // game.textAlign = 'center';
  // game.fillText('Platzi', 25,25);
  
=======
  game.font = '25px Verdana'
  game.fillStyle = 'purple';
  game.textAlign = 'center';
  game.fillText('Platzi', 25,25);
>>>>>>> dc66f9259db19bed8d73a3a43b35ca2d51d84bfc
}