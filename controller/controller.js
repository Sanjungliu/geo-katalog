const { Katalog } = require("../models");

module.exports = class Controller {
  static getKatalog(req, res) {
    Katalog.findAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  }
};
