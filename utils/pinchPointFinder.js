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
  for (let i = 0; i < intervals.length; i++) {
    for (let j = 0; j < streams.length; j++) {
      if (streams[j].streamType === 'hotStream') {
        if (intervals[i].start > streams[j].Tin && intervals[i].end < streams[j].Tout) {
          streamsIds.push(streams[j].id);
          hotFlowHeatCap += streams[j].flowHeatCapacity;
        }
      } else if (streams[j].streamType === 'coldStream') {
        if (intervals[i].start > streams[j].Tin && intervals[i].end < streams[j].Tout) {
          streamsIds.push(streams[j].id);
          coldFlowHeatCap += streams[j].flowHeatCapacity;
        }
      }
    }
    intervals[i].streamId = streamsIds;
    intervals[i].heatCapRes = coldFlowHeatCap - hotFlowHeatCap;
    streamsIds = [];
    hotFlowHeatCap = 0;
    coldFlowHeatCap = 0;
  }

  console.log(intervals);
};
module.exports = pinchPointFinder;
