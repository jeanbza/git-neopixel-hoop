function getInitialStrip(stripLength) {
  var newStrip = [];

  for (var i = 0; i < stripLength; i++) {
    newStrip.push(colors[0]);
  }

  return newStrip;
}

function getColorStrip(stripLength) {
  var newStrip = [];

  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < stripLength / 6; i++) {
      newStrip[i * 6 + j] = colors[currentColorIndex];
    }
  }

  currentColorIndex += 1;

  return newStrip;
}