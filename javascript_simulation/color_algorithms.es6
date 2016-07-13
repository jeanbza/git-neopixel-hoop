function colorStrip(stripSvg, numPoints) {
  foo(stripSvg, numPoints, numPoints, randomNumberBetween(0, colors.length))
}

function foo(stripSvg, pointsLeft, numPoints, colorIndex) {
  if (pointsLeft > 0) {
    changePointColor(stripSvg, numPoints - pointsLeft, colors[colorIndex])
    setTimeout(_ => foo(stripSvg, pointsLeft - 1, numPoints, colorIndex), 20)
  } else {
    setTimeout(_ => foo(stripSvg, numPoints, numPoints, randomNumberBetween(0, colors.length)), 20)
  }
}

function changePointColor(stripSvg, pointIndex, color) {
  d3.select(d3.select('#content').selectAll('circle')._groups[0][pointIndex])
    .style('fill', color)
}

function randomNumberBetween(start, end) {
  console.log(start, end, Math.floor((Math.random() * end) + start))

  return Math.floor((Math.random() * end) + start)
}