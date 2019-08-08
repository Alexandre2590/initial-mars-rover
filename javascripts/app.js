// Rover Object Goes Here
// ======================


// ======================
function turnLeft(rover) {
rover.travelLog.push (rover.direction, rover.x, rover.y)
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;

  }

  console.log("Rover is facing " + rover.direction);
}

function turnRight(rover) {
  rover.travelLog.push (rover.direction, rover.x, rover.y)
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "W":
      rover.direction = "N"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "E":
      rover.direction = "S"
      break;
  }
  console.log("Rover is facing " + rover.direction)
}

function moveForward(rover) {
  rover.travelLog.push (rover.direction, rover.x, rover.y)
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.y = rover.y + 1
      break;
    case "W":
      rover.x = rover.x - 1
      break;
    case "S":
      rover.y = rover.y - 1
      break;
    case "E":
      rover.x = rover.x + 1
      break;
  }
  console.log("(x:" + rover.x + ";Y:" + rover.y + ")")
}
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
function commandRover(commands) {
  for (let i = 0; i < commands.length; i++){
    console.log(i);
    let order = commands[i];
    if (order === "f") moveForward(rover)
    if (order === "r") turnRight(rover)
    if (order === "l") turnLeft(rover)
  }

}


