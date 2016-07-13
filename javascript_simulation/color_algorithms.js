function getInitialStrip(stripLength) {
  var newStrip = [];

  for (var i = 0; i < stripLength; i++) {
    newStrip.push(colors[0]);
  }

  return newStrip;
}

function getColorStrip(stripLength) {
  var newStrip = [];
  
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < stripLength / 6; j++) {
      // strip[]
    }
  }

  currentColorIndex += 1;

  return newStrip;
}