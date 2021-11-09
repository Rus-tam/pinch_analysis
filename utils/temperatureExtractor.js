const temperatureExtractor = (streams) => {
  let allTemp = [];
  streams.forEach((elem) => {
    allTemp.push(elem.Tin);
    allTemp.push(elem.Tout);
  });

  return allTemp;
};

module.exports = temperatureExtractor;
