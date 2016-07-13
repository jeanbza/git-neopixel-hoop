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
  /*
   xrot=cos(θ)⋅(x−cx)−sin(θ)⋅(y−cy)+cx
   yrot=sin(θ)⋅(x−cx)+cos(θ)⋅(y−cy)+cy
   */

  var newX = Math.cos(rotationDegree) * (currentPointX - centralPointX)
    - Math.sin(rotationDegree) * (currentPointY - centralPointY)
    + centralPointX;

  var newY = Math.sin(rotationDegree) * (currentPointX - centralPointX)
    + Math.cos(rotationDegree) * (currentPointY - centralPointY)
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

function drawHoop(points, xOffset, yOffset, svg, color) {
  svg.selectAll('circle').remove();

  svg.selectAll('circle')
    .data(points)
    .enter()
    .append('circle')
    .style('stroke', 'gray')
    .style('fill', color)
    .attr('r', 2)
    .attr('cx', function (i) {
      return i.cx + xOffset
    })
    .attr('cy', function (i) {
      return i.cy + yOffset
    });
}
