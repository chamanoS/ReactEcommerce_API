const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test is successful");
});

router.post("/userpost",(req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    console.log(username,email);
})

module.exports = router;
