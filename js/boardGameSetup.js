const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 10;
var y = 10;

var playerTurn = 1;

var blocksInBlocksLength = 4;
var blocksInBlocks = [];
var blockLength = canvas.width/2 - 8;
for (var bc = 0; bc < 2; bc++) {
  blocksInBlocks[bc] = [];
  for (var br = 0; br < 2; br++) {
    blocksInBlocks[bc][br] = [];
    for (var c = 0; c < blocksInBlocksLength; c++) {
      blocksInBlocks[bc][br][c] = [];
      for (var r = 0; r < blocksInBlocksLength; r++) {
        if(r%2 + c%2 == 1){
          blocksInBlocks[bc][br][c][r] = { x:0, y:0, status:0, color:1, changed:false};
        }
        else { // r%2+x%2 == 0,2
          blocksInBlocks[bc][br][c][r] = { x:0, y:0, status:0, color:0, changed:false};
        }
      }
    }
  }
}

// gets mouse position relative to the canvas
function getMousePos(e) {
    var rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

// checks if the mouse clicked on a shape
function inMousePos(x, y, mx, my, w = blockLength/4, h = blockLength/4) {
  return (x <= mx) && (x + w >= mx) &&
          (y <= my) && (y + h >= my);
}

function changePiece(e) { // and get block
  var mouse = getMousePos(e);
  var mx = mouse.x;
  var my = mouse.y;
  console.log(mouse);
  blocksInBlocks.forEach(function(bc) { // array stuff
    bc.forEach(function(br) {
      br.forEach(function(c) {
        c.forEach(function(r) {
          if (inMousePos(r.x, r.y, mx, my)) { // checks which object was clicked on

            if (!r.changed) { // checks if a player has already clicked on it
              // changes player turn and color of piece
              if (playerTurn === 1) {
                r.status = 1;
                playerTurn = 2;
              }
              else if (playerTurn === 2) {
                r.status = 2;
                playerTurn = 1;
              }
              else {
                alert('oops'); // if i fuck up or for later
              }
              r.changed=true;
              drawPiece(r,25);
            }
          }
        });
      });
    });
  });
}

function drawPiece(piece, ballRadius, color = undefined) {
  x = piece.x + blockLength/8;
  y = piece.y + blockLength/8;
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  if (piece.status == 0){
    ctx.fillStyle = 'black';
  }
  else if (piece.status == 1) {
    ctx.fillStyle = 'grey';
  }
  else if (piece.status == 2) {
    ctx.fillStyle = 'white';
  }
  ctx.fill();
  ctx.closePath();
}

function drawBoard(overflow, separation) {
  for (var bc = 0; bc < 2; bc++) {
    for (var br = 0; br < 2; br++) {
      y = (blockLength + separation) * bc;
      for (var c = 0; c < blocksInBlocksLength; c++) {
        x = (blockLength + separation) * br;
        for (var r = 0; r < blocksInBlocksLength; r++) {
          blocksInBlocks[bc][br][c][r].x = x;
          blocksInBlocks[bc][br][c][r].y = y;
          ctx.beginPath();
          ctx.rect(x, y, blockLength/4, blockLength/4);
          // changing color based on block column and row
          if (blocksInBlocks[bc][br][c][r].color == 0) {
            ctx.fillStyle = '#0000FF';
          }
          else if (blocksInBlocks[bc][br][c][r].color == 1){
            ctx.fillStyle = '#C4FF00';
          }
          ctx.fill();
          ctx.closePath();
          x+=(blockLength)/4 + overflow;
        }
        y += (blockLength)/4 + overflow;
      }
      x = blockLength*br;
    }
  }
}

function draw() { // main
  drawBoard(0,16);
  blocksInBlocks.forEach(function(bc) {
    bc.forEach(function(br) {
      br.forEach(function(c) {
        c.forEach(function(r) {
            drawPiece(r,25);
        });
      });
    });
  });
}
draw();

canvas.addEventListener('click', function(e) {
  changePiece(e);
}, true);
