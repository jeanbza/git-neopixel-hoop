function colorStrip(stripSvg, numPoints) {
  recursivelyColorStrip(stripSvg, numPoints, numPoints, randomNumberBetween(0, colors.length))
}

function recursivelyColorStrip(stripSvg, pointsLeft, numPoints, colorIndex) {
  if (pointsLeft > 0) {
    changePointColor(stripSvg, numPoints - pointsLeft, colors[colorIndex])
    setTimeout(function () {
      recursivelyColorStrip(stripSvg, pointsLeft - 1, numPoints, colorIndex)
    }, 20)
  } else {
    setTimeout(function () {
      recursivelyColorStrip(stripSvg, numPoints, numPoints, randomNumberBetween(0, colors.length))
    }, 20)
  }
}

function changePointColor(stripSvg, pointIndex, color) {
  d3.select(d3.select('#content').selectAll('circle')._groups[0][pointIndex])
    .style('fill', color)
}