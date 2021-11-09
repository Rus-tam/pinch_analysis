const streamDataMaker = (data) => {
  const streams = [];
  let streamType = "";

  const Tin = data.Tin;
  const Tout = data.Tout;
  const massFlow = data.massFlow;
  const heatConductivity = data.heatConductivity;

  for (let i = 0; i < Tin.length; i++) {
    Tin[i] > Tout[i] ? (streamType = "hotStream") : (streamType = "coldStream");
    streams.push({
      streamType: streamType,
      Tin: Tin[i],
      Tout: Tout[i],
      massFlow: massFlow[i],
      heatConductivity: heatConductivity[i],
      flowHeatCapacity: massFlow[i] * heatConductivity[i],
    });
  }

  return streams;
};

module.exports = streamDataMaker;
