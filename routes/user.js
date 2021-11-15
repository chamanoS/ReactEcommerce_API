const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyToken,(req,res)=>{
    if(req.user)
})

module.exports = router;
