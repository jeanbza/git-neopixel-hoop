var sections = 6;

function colorStrip(stripSvg, numPoints) {
  recursivelyColorStrip(stripSvg, 0, numPoints, randomNumberBetween(0, colors.length))
}

function recursivelyColorStrip(stripSvg, sectionIndex, numPoints, colorIndex) {
  var sectionSize = numPoints / sections

  if (sectionIndex < sectionSize) {
    for (var i = 0; i < sections; i++) {
      changePointColor(stripSvg, i * sectionSize + sectionIndex, colors[colorIndex])
    }

    setTimeout(function () {
      recursivelyColorStrip(stripSvg, sectionIndex + 1, numPoints, colorIndex)
    }, 50)
  } else {
    recursivelyColorStrip(stripSvg, 0, numPoints, randomNumberBetween(0, colors.length))
  }
}

function changePointColor(stripSvg, pointIndex, color) {
  d3.select(d3.select('#content').selectAll('circle')._groups[0][pointIndex])
    .style('fill', color)
}