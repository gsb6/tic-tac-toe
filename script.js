const ticTacToe = {
  board: new Array(9).fill(''),
  symbols: ['X', 'O'],
  turn: 0,
  gameover: false,
  container: null,
  winningSequences: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  init: function (container) {
    console.log('init');
    this.container = container;
    this.start();
  },

  start: function () {
    console.log('start');
    this.gameover = false;
    this.turn = 0;
    this.board.fill('');

    this.draw();
  },

  nextTurn: function () {
    console.log('nextTurn');
    this.turn = (this.turn === 0) ? 1 : 0;
  },

  draw: function () {
    console.log('draw');
    const divs = this.board.map((value, index) => (
      `<div onClick="ticTacToe.play(${index})">${value}</div>`
    ));

    this.container.innerHTML = divs.join('');
  },

  endGame: function () {
    console.log('endGame');
    alert('Temos um vencedor!');
    
    this.gameover = true;
    this.start();
  },

  checkWinner: function () {
    console.log('checkWinner');
    const symbol = this.symbols[this.turn];

    this.winningSequences.forEach((sequence) => {
      const haveWinner = sequence.reduce(
        (acc, cur) => (acc && (this.board[cur] === symbol)),
        true
      );

      haveWinner && this.endGame();
    })
  },

  play: function (position) {
    console.log('play');
    if (this.gameover) return false;
    if (this.board[position]) return false;

    const symbol = this.symbols[this.turn];

    this.board[position] = symbol;

    this.draw();
    this.checkWinner();
    this.nextTurn();
  },
}