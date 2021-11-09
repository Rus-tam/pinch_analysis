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
    const streams = streamDataMaker(req.body);
    intervalMaker(streams);

    res.send(streams);
    //res.redirect("/");
  } catch (e) {
    res.render("error", {
      docTitle: "Ошибка",
      message: "Что-то пошло не так!",
      error: e,
    });
  }
};
