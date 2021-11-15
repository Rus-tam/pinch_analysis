const streamDataMaker = require('../utils/streamDataMaker');
const intervalMaker = require('../utils/intervalMaker');
const pinchPointFinder = require('../utils/pinchPointFinder');

//Костыль
let globalData = [];

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
    globalData = req.body;
    res.redirect('/results');
  } catch (e) {
    res.render('error', {
      docTitle: 'Ошибка',
      message: 'Что-то пошло не так!',
      error: e,
    });
  }
};

exports.getResults = (req, res) => {
  try {
    const { streams, shiftedStreams } = streamDataMaker(globalData);
    const intervals = intervalMaker(shiftedStreams);
    const { hotPinchPoint, coldPinchPoint, hotUtilities, coldUtilities } = pinchPointFinder(intervals, shiftedStreams);
    res.render('results', {
      title: 'Результаты',
      hotPinchPoint,
      coldPinchPoint,
      hotUtilities,
      coldUtilities,
    });
  } catch (e) {
    res.render('error', {
      docTitle: 'Ошибка',
      message: 'Что-то пошло не так!',
      error: e,
    });
  }
};
