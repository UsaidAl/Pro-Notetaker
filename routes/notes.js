const note = require("express").Router();
const { fsUtils } = require("../helpers/fsUtils");
const util = new fsUtils();
note.get("/", (req, res) => {
  util.readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});


note.post("/", (req, res) => {
    const { title, text } = req.body;
    if (!title || !text)
      return res.json({
        status: "Failed!",
        reason: "both of the fields must be complete",
      });
  
    util.writeToFile({ title, text }, "./db/db.json");
  
    res.json({
      status: "Success!",
      body: { title, text },
    });
  });
  
  note.delete("/:note_id", (req, res) => {
    const id = req.params.note_id;
    console.log(id);
    const response = util.deleteDataFromFile(id, "./db/db.json");
    if (response) {
      return res.json({ status: "Failed!", reason: response });
    }
  
    res.json({ status: "Success", body: id });
  });
  
module.exports = note;