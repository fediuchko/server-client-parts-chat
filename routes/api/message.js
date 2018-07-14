const router = require("express").Router();
const messageService = require("../../services/message");

router.get("/", (req, res, next) => {
  messageService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});
router.post("/", (req, res, next) => {
    messageService.create(req.body, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.status(400);
      res.end();
    }
  });
});
router.delete("/:id", (req, res, next) => {
  messageService.remove((req.params.id), (err, data) => {
    if (!err) {
      res.json({ message:"user delete"});
    } else {
      res.status(400);
      res.end();
    }
  });
});
router.put("/:id", (req, res, next) => {
  var dataToUpdate = {};
  if (req.body.messages) dataToUpdate.messages= req.body.messages;
  if (req.body.senderId) dataToUpdate.senderId= req.body.senderId;
  if (req.body.receiverId) dataToUpdate.receiverId= req.body.receiverId;
  messageService.update(req.params.id, dataToUpdate, (err, data) => {
    if (!err) {
        messageService.findOne(req.params.id, (err, data) => {
        if (!err) {
          res.json(data);
        } else {
          res.status(400);
          res.json(err);
          res.end();
        }
      });
    } else {
      res.status(400);
      res.json(err);
      res.end();
    }
  });
});
router.get("/:id", (req, res, next) => {
    messageService.findOne(req.params.id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;
