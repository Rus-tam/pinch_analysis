const streamDataMaker = (data) => {
  const streams = [];
  const shiftedStreams = [];
  let streamType = "";

  const Tin = data.Tin;
  const Tout = data.Tout;
  const massFlow = data.massFlow;
  const heatConductivity = data.heatConductivity;
  const deltaT = data.deltaT;

  for (let i = 0; i < Tin.length; i++) {
    parseFloat(Tin[i]) > parseFloat(Tout[i])
      ? (streamType = "hotStream")
      : (streamType = "coldStream");
    streams.push({
      streamType: streamType,
      Tin: parseFloat(Tin[i]),
      Tout: parseFloat(Tout[i]),
      massFlow: parseFloat(massFlow[i]),
      heatConductivity: parseFloat(heatConductivity[i]),
      flowHeatCapacity:
        parseFloat(massFlow[i]) * parseFloat(heatConductivity[i]),
      deltaT: parseFloat(deltaT),
    });

    if (streamType === "hotStream") {
      shiftedStreams.push({
        streamType: streamType,
        Tin: parseFloat(Tin[i]) - parseFloat(deltaT) / 2,
        Tout: parseFloat(Tout[i]) - parseFloat(deltaT) / 2,
        massFlow: parseFloat(massFlow[i]),
        heatConductivity: parseFloat(heatConductivity[i]),
        flowHeatCapacity:
          parseFloat(massFlow[i]) * parseFloat(heatConductivity[i]),
      });
    } else {
      shiftedStreams.push({
        streamType: streamType,
        Tin: parseFloat(Tin[i]) + parseFloat(deltaT) / 2,
        Tout: parseFloat(Tout[i]) + parseFloat(deltaT) / 2,
        massFlow: parseFloat(massFlow[i]),
        heatConductivity: parseFloat(heatConductivity[i]),
        flowHeatCapacity:
          parseFloat(massFlow[i]) * parseFloat(heatConductivity[i]),
      });
    }
  }

  return { streams, shiftedStreams };
};

module.exports = streamDataMaker;
