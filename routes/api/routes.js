 const user = require("./user");
 const message = require("./message");
 const friends = require("./userChatFriendsRoate");


 module.exports =   function(app) {
       app.use("/api/user", user);
       app.use("/api/message", message);
       app.use("/api/userChatFriendsRoate", friends);
     }
  

