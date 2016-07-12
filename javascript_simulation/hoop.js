function drawHoop(svg, color) {
  var xOffset = 400;
  var yOffset = 400;
  var jsonCircles = [];
  var r = 35;
  for (var theta = 0; theta < 360; theta += 3) {
    var x = r * Math.sin(theta);
    var y = r * Math.cos(theta);

    jsonCircles.push({'cx': x * 10 + xOffset, 'cy': y * 10 + yOffset});
  }

  console.log(jsonCircles.length);
  
  svg.selectAll('circle').remove();

  svg.selectAll('circle')
    .data(jsonCircles)
    .enter()
    .append('circle')
    .style('stroke', 'gray')
    .style('fill', color)
    .attr('r', 5)
    .attr('cx', function (i) {
      return i.cx
    })
    .attr('cy', function (i) {
      return i.cy
    });
}
