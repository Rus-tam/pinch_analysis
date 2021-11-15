const streamDataMaker = require('../utils/streamDataMaker');
const intervalMaker = require('../utils/intervalMaker');
const pinchPointFinder = require('../utils/pinchPointFinder');

exports.getIndex = (req, res) => {
  try {
    res.render('index', {
      title: 'Пинч',
    });
  } catch (e) {
    res.render('error', {
      docTitle: 'Ошибка',
      message: 'Что-то пошло не так!',
      error: e,
    });
  }
};

exports.postData = (req, res) => {
  try {
    const { streams, shiftedStreams } = streamDataMaker(req.body);
    const intervals = intervalMaker(shiftedStreams);
    // console.log(intervals);
    pinchPointFinder(intervals, shiftedStreams);

    res.send(shiftedStreams);
  } catch (e) {
    res.render('error', {
      docTitle: 'Ошибка',
      message: 'Что-то пошло не так!',
      error: e,
    });
  }
};
