// http://math.stackexchange.com/questions/814950/how-can-i-rotate-a-coordinate-around-a-circle
function rotatePoint(centralPointX, centralPointY, point, rotationDegree) {
  var rotationRadian = degreesToRadians(rotationDegree)

  var newX = Math.cos(rotationRadian) * (point.cx - centralPointX)
    - Math.sin(rotationRadian) * (point.cy - centralPointY)
    + centralPointX

  var newY = Math.sin(rotationRadian) * (point.cx - centralPointX)
    + Math.cos(rotationRadian) * (point.cy - centralPointY)
    + centralPointY

  return {'index': point.index, 'cx': newX, 'cy': newY}
}

function rotatePoints(centralX, centralY, points, rotationDegrees) {
  var newPoints = []

  for (var i = 0; i < points.length; i++) {
    var point = points[i]
    var newPoint = rotatePoint(centralX, centralY, point, rotationDegrees)
    newPoints.push(newPoint)
  }

  return newPoints
}

// http://formulas.tutorvista.com/math/degrees-to-radians-formula.html
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180
}

function randomNumberBetween(start, end) {
  return Math.floor((Math.random() * end) + start)
}