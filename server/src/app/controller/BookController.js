const Book = require("../model/Books");

class BookController {
  async store(req, res) {
    console.log(req.body);
    const data = await Book.create(req.body);

    return res.json(data);
  }
  async list(req, res) {
    const data = await Book.find({});

    return res.json(data);
  }

  async get(req, res) {
      const data = await Book.findOne({id: req.params.id})
      return res.json(data);
  }

  async delete(req, res) {
      const data = await Book.deleteOne({id: req.params.id});

      return res.json(data);
  }

}

module.exports = new BookController();