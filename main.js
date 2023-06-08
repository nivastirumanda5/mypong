//board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

//players 
let playerWidth = 10;
let playerHeight = 50;
let playerVelocityY = 0;

let player1 = {
    x : 10,
    y : boardHeight / 2,
    width : playerWidth,
    height : playerHeight,
    velocityY : 0
}

let player2 = {
    x : boardWidth - playerWidth - 10,
    y : boardHeight / 2,
    width : playerWidth,
    height : playerHeight,
    velocityY : 0
}

//ball
let ballWidth = 10;
let ballHeight = 10;
let ball = {
    x : boardWidth / 2,
    y : boardHeight / 2,
    width : ballWidth,
    height : ballHeight
}
