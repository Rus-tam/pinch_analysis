const streamDataMaker = require("../utils/streamDataMaker");
const intervalMaker = require("../utils/intervalMaker");

exports.getIndex = (req, res) => {
  try {
    res.render("index", {
      title: "Пинч",
    });
  } catch (e) {
    res.render("error", {
      docTitle: "Ошибка",
      message: "Что-то пошло не так!",
      error: e,
    });
  }
};

exports.postData = (req, res) => {
  try {
    const { streams, shiftedStreams } = streamDataMaker(req.body);
    console.log(shiftedStreams);

    // const intervals = intervalMaker(shiftedStreams);

    res.send(streams);
  } catch (e) {
    res.render("error", {
      docTitle: "Ошибка",
      message: "Что-то пошло не так!",
      error: e,
    });
  }
};
