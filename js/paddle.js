var requestId;

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = -2;
var dy = -2;

var ballRadius = 10;

var lives=3;
// paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var score = 0;

var interval;

var bricks = [];
for (var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for (var r=0; r<brickRowCount;r++){
    bricks[c][r] = { x:0, y:0, status: 1};
  }
}

function restart() {

  const canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = -2;
  dy = -2;

  ballRadius = 10;

  lives=3;
  // paddle
  paddleX = (canvas.width-paddleWidth) / 2;

  score = 0;

  bricks = [];
  for (var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for (var r=0; r<brickRowCount;r++){
      bricks[c][r] = { x:0, y:0, status: 1};
    }
  }
  console.log('hm');
  draw();
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
          if (bricks[c][r].status ==1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
    }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x + ballRadius > b.x && x - ballRadius < b.x+brickWidth && y + ballRadius > b.y && y -ballRadius < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount*brickColumnCount) {
                      alert("You win");
                      //document.location.reload(); //this is here
                    }
                }
            }
        }
    }
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.closePath();

}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  drawScore();
  drawLives();


  if (x + dx + ballRadius > canvas.width || x + dx - ballRadius < 0) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
        lives--;
        if (!lives) {
          alert('game over');
          //document.location.reload(); //this is here
        }
        else {
          x = canvas.width/2;
          y=canvas.height-30;
          dx = 2;
          dy = -2
          paddleX = (canvas.width-paddleWidth)/2;
        }

        //document.location.reload(); //this is here
    }
  }
  x +=dx;
  y +=dy;

  if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width){
      paddleX = canvas.width - paddleWidth;
    }
  }
  else if(leftPressed) {
      paddleX -= 7;
      if (paddleX < 0){
        paddleX = 0;
      }
  }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == 'd') {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == 'a') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == 'd') {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == 'a') {
        leftPressed = false;
    }
}

var running = false;
document.addEventListener("keydown", keyDownHandler, false);

document.addEventListener("keypress", event => {
  console.log(event.keyCode);
  if (event.keyCode == 32) {
    console.log('hi');
    if (running){
      clearInterval(interval);
      running = false;
    }
    else if (!running) {
      interval = setInterval(draw, 10);
      running = true;
    }
  }
}, true);
document.addEventListener("keyup", keyUpHandler, false);

document.getElementById('startButton').addEventListener('click', function() {
   if (!running) {
     interval = setInterval(draw, 10);
     running = true;
   }
});
document.getElementById('stopButton').addEventListener('click', function() {
  if(running) {
    clearInterval(interval);
    running = false;
  }
});

document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
