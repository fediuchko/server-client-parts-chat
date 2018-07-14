const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
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
  userService.create(req.body, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.status(400);
      res.end();
    }
  });
});
router.delete("/:id", (req, res, next) => {
  userService.remove((req.params.id), (err, data) => {
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
  if (req.body.firstName) dataToUpdate.firstName= req.body.firstName;
  if (req.body.lastName) dataToUpdate.lastName= req.body.lastName;
  if (req.body.username) dataToUpdate.username= req.body.username;
  if (req.body.email) dataToUpdate.email= req.body.email;
  userService.update(req.params.id, dataToUpdate, (err, data) => {
    if (!err) {
      userService.findOne(req.params.id, (err, data) => {
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
  userService.findOne(req.params.id, (err, data) => {
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
