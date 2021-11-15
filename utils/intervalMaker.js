const intervalMaker = streams => {
  let allTemp = [];
  let intervals = [];
  streams.forEach(elem => {
    allTemp.push(elem.Tin);
    allTemp.push(elem.Tout);
  });

  //Bubble Sort
  for (let i = 0; i < allTemp.length; i++) {
    for (let j = 0; j < allTemp.length - i - 1; j++) {
      if (allTemp[j] < allTemp[j + 1]) {
        let leftHand = allTemp[j];
        allTemp[j] = allTemp[j + 1];
        allTemp[j + 1] = leftHand;
      }
    }
  }

  for (let i = 0; i < allTemp.length - 1; i++) {
    intervals.push({
      id: i,
      start: allTemp[i],
      end: allTemp[i + 1],
      deltaT: allTemp[i] - allTemp[i + 1],
    });
  }

  return intervals;
};

module.exports = intervalMaker;
