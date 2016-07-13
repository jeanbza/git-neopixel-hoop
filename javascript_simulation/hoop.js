// http://formulas.tutorvista.com/math/degrees-to-radians-formula.html
function degreesToRadians(degrees) {
  var radians = degrees * Math.PI / 180;
  return radians;
}

// http://stackoverflow.com/questions/5300938/calculating-the-position-of-points-in-a-circle
function initialCirclePoints(radius) {
  points = [];

  for (var theta = 0; theta < 360; theta += 3) {
    var x = radius * Math.sin(theta);
    var y = radius * Math.cos(theta);

    points.push({'cx': x, 'cy': y});
  }

  return points;
}

// http://math.stackexchange.com/questions/814950/how-can-i-rotate-a-coordinate-around-a-circle
function rotatePoint(centralPointX, centralPointY, currentPointX, currentPointY, rotationDegree) {
  var rotationRadian = degreesToRadians(rotationDegree);

  var newX = Math.cos(rotationRadian) * (currentPointX - centralPointX)
    - Math.sin(rotationRadian) * (currentPointY - centralPointY)
    + centralPointX;

  var newY = Math.sin(rotationRadian) * (currentPointX - centralPointX)
    + Math.cos(rotationRadian) * (currentPointY - centralPointY)
    + centralPointY;

  return {'cx': newX, 'cy': newY};
}

function rotatePoints(centralX, centralY, points, rotationDegrees) {
  var newPoints = [];

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var newPoint = rotatePoint(centralX, centralY, point.cx, point.cy, rotationDegrees);
    newPoints.push(newPoint);
  }

  return newPoints;
}

function drawHoop(points, offsetX, offsetY, svg, color) {
  svg.selectAll('circle').remove();

  svg.selectAll('circle')
    .data(points)
    .enter()
    .append('circle')
    .style('stroke', 'gray')
    .style('fill', color)
    .attr('r', 2)
    .attr('cx', function (i) {
      return i.cx + offsetX
    })
    .attr('cy', function (i) {
      return i.cy + offsetY
    });
}
