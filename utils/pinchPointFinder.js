const pinchPointFinder = (intervals, streams) => {
  //Выстраивание входных и выходных температур по возрастанию
  streams.forEach(elem => {
    if (elem.Tin > elem.Tout) {
      let number = elem.Tin;
      elem.Tin = elem.Tout;
      elem.Tout = number;
    }
  });

  //Определение потоков входящих в тот или иной интервал
  let streamsIds = [];
  let hotFlowHeatCap = 0;
  let coldFlowHeatCap = 0;
  let isNegativeValue = false;
  let minValue = 0;
  let pinchPoint = 0;
  let hotPinchPoint = 0;
  let coldPinchPoint = 0;
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < streams.length; j++) {
      if (intervals[i].start > streams[j].Tin && intervals[i].end < streams[j].Tout) {
        streamsIds.push(streams[j].id);
        if (streams[j].streamType === 'hotStream') {
          hotFlowHeatCap += streams[j].flowHeatCapacity;
        } else if (streams[j].streamType === 'coldStream') {
          coldFlowHeatCap += streams[j].flowHeatCapacity;
        }
      }
    }
    intervals[i].streamId = streamsIds;
    intervals[i].heatCapRes = coldFlowHeatCap - hotFlowHeatCap;
    intervals[i].deltaH = intervals[i].deltaT * intervals[i].heatCapRes;
    intervals[i].deltaH < 0 ? (intervals[i].heatStatus = 'heatExcess') : (intervals[i].heatStatus = 'heatLack');
    if (i === 0) {
      intervals[i].incomingHeatV1 = 0;
      intervals[i].outgoingHeatV1 = intervals[i].incomingHeatV1 - intervals[i].deltaH;
      intervals[i].incomingHeatV1 < 0 && intervals[i].outgoingHeatV1 < 0 ? (isNegativeValue = true) : null;
    } else {
      intervals[i].incomingHeatV1 = intervals[i - 1].outgoingHeatV1;
      intervals[i].outgoingHeatV1 = intervals[i].incomingHeatV1 - intervals[i].deltaH;
      intervals[i].incomingHeatV1 < 0 && intervals[i].outgoingHeatV1 < 0 ? (isNegativeValue = true) : null;
    }
    minValue > intervals[i].outgoingHeatV1 ? (minValue = intervals[i].outgoingHeatV1) : null;
    streamsIds = [];
    hotFlowHeatCap = 0;
    coldFlowHeatCap = 0;
  }

  if (isNegativeValue) {
    for (let i = 0; i < intervals.length; i++) {
      minValue = minValue * -1;
      if (i === 0) {
        intervals[i].incomingHeat = minValue;
        intervals[i].outgoingHeat = intervals[i].incomingHeat - intervals[i].deltaH;
      } else {
        intervals[i].incomingHeat = intervals[i - 1].outgoingHeat;
        intervals[i].outgoingHeat = intervals[i].incomingHeat - intervals[i].deltaH;
      }

      if (intervals[i].outgoingHeat === 0) {
        pinchPoint = intervals[i].end;
        hotPinchPoint = pinchPoint + streams[0].deltaT / 2;
        coldPinchPoint = pinchPoint - streams[0].deltaT / 2;
      }
    }
  }

  return { hotPinchPoint, coldPinchPoint };
};
module.exports = pinchPointFinder;
