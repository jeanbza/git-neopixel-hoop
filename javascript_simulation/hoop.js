// http://stackoverflow.com/questions/5300938/calculating-the-position-of-points-in-a-circle
function initialCirclePoints(radius, numPoints) {
  var points = [];
  var thetaDelta = 360 / numPoints;

  for (var theta = 0; theta < 360; theta += thetaDelta) {
    var thetaRadians = degreesToRadians(theta);

    var x = radius * Math.sin(thetaRadians);
    var y = radius * Math.cos(thetaRadians);

    points.push({'index': theta / thetaDelta, 'cx': x, 'cy': y});
  }

  return points;
}

function drawHoop(points, offsetX, offsetY, svg) {
  svg.selectAll('circle').remove();

  svg.selectAll('circle')
    .data(points)
    .enter()
    .append('circle')
    .attr('r', 5)
    .attr('index', function(i) {
      return i.index
    })
    .attr('cx', function (i) {
      return i.cx + offsetX
    })
    .attr('cy', function (i) {
      return i.cy + offsetY
    });
}
