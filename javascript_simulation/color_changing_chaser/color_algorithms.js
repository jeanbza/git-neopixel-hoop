var delta = 5

function colorStrip(stripSvg, numPoints) {
  colorStripLoop(stripSvg, numPoints, 0, 0, 0)
}

function colorStripLoop(stripSvg, numPoints, red, green, blue) {
  redHex = decimalToHex(red)
  greenHex = decimalToHex(green)
  blueHex = decimalToHex(blue)
  color = '#'.concat(padLeft(redHex), padLeft(greenHex), padLeft(blueHex))

  console.log(red, green, blue, color)

  recursivelyColorStrip(stripSvg, numPoints, numPoints, color)

  setTimeout(function() {
    if (blue < 255) {
      colorStripLoop(stripSvg, numPoints, red, green, blue + delta)
    } else {
      if (green < 255) {
        colorStripLoop(stripSvg, numPoints, red, green + delta, blue)
      } else {
        if (red < 255) {
          colorStripLoop(stripSvg, numPoints, red + delta, green, blue)
        } else {
          // TODO: Go down now instead of up
          colorStripLoop(stripSvg, numPoints, 0, 0, 0)
        }
      }
    }
  }, 100)
}

function recursivelyColorStrip(stripSvg, pointsLeft, numPoints, colorHex) {
  if (pointsLeft > 0) {
    changePointColor(stripSvg, numPoints - pointsLeft, colorHex)
    setTimeout(function () {
      recursivelyColorStrip(stripSvg, pointsLeft - 1, numPoints, colorHex)
    }, 20)
  }
}

function changePointColor(stripSvg, pointIndex, color) {
  d3.select(d3.select('#content').selectAll('circle')._groups[0][pointIndex])
    .style('fill', color)
}

function padLeft(input) {
  var str = "" + input
  var pad = "00"
  var ans = pad.substring(0, pad.length - str.length) + str
  return ans
}