const router = require("express").Router();
const userService = require("../../services/user");
const messageService = require("../../services/message");

  router.get("/:id", (req, res, next) => {
    let userId  =req.params.id;
           messageService.findBySenderId(userId, (err, data) => {
          var chatFriendsIds=new Set();
            if (!err) {
              data.map(message=>{
                chatFriendsIds.add(message.receiverId)
              })
             }
            messageService.findByReceiverId(userId, (err, data) => {
              if (!err) {
                data.map(message=>{
                  chatFriendsIds.add(message.senderId)
                })
            }
            var chatFriends=[];
            chatFriendsIds.forEach(id=>{
              userService.findOne(id, (err, data) => {
                if (!err) {
                  chatFriends.push(data);
                  if (chatFriends.length===chatFriendsIds.size){
                    res.json(chatFriends)
                  }
                } else {
                  res.status(400);
                  res.json("Error: "+err);
                  res.end();
                }
              });
            })
            
          });
    
      });
    });
  module.exports = router;