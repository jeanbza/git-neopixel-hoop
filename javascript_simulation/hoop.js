// http://formulas.tutorvista.com/math/degrees-to-radians-formula.html
function degreesToRadians(degrees) {
  var radians = degrees * Math.PI / 180;
  return radians;
}

// http://stackoverflow.com/questions/5300938/calculating-the-position-of-points-in-a-circle
function initialCirclePoints(radius, numPoints) {
  var points = [];
  var thetaDelta = 360 / numPoints;

  for (var theta = 0; theta < 360; theta += thetaDelta) {
    var x = radius * Math.sin(theta);
    var y = radius * Math.cos(theta);

    points.push({'index': theta / thetaDelta, 'cx': x, 'cy': y});
  }

  return points;
}

// http://math.stackexchange.com/questions/814950/how-can-i-rotate-a-coordinate-around-a-circle
function rotatePoint(centralPointX, centralPointY, point, rotationDegree) {
  var rotationRadian = degreesToRadians(rotationDegree);

  var newX = Math.cos(rotationRadian) * (point.cx - centralPointX)
    - Math.sin(rotationRadian) * (point.cy - centralPointY)
    + centralPointX;

  var newY = Math.sin(rotationRadian) * (point.cx - centralPointX)
    + Math.cos(rotationRadian) * (point.cy - centralPointY)
    + centralPointY;

  return {'index': point.index, 'cx': newX, 'cy': newY};
}

function rotatePoints(centralX, centralY, points, rotationDegrees) {
  var newPoints = [];

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var newPoint = rotatePoint(centralX, centralY, point, rotationDegrees);
    newPoints.push(newPoint);
  }

  return newPoints;
}

function drawHoop(points, colorStrip, offsetX, offsetY, svg) {
  svg.selectAll('circle').remove();

  svg.selectAll('circle')
    .data(points)
    .enter()
    .append('circle')
    .style('stroke', 'gray')
    .style('fill', function (i) {
      return colorStrip[i.index]
    })
    .attr('r', 2)
    .attr('cx', function (i) {
      return i.cx + offsetX
    })
    .attr('cy', function (i) {
      return i.cy + offsetY
    });
}
