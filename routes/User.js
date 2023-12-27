import express from "express";
const router = express.Router();
router.use(express.json())
let users = [];

// Adding users by id's

router.post("/new/:id", (req, res) => {
    let name = req.params.id;
    users.push(name);
    res.status(200).send(`The user ${name} has been added successfully`);
});


router.get("/", (req, res) => {
    res.send("The users list is: " + users);
});

let messages = []

router.post('/send', (req,res) =>{
    let msg = req.body.text
    messages.push(msg)
    res.status(200).send(`The message has been sent!`);
})
router.get('/show',(req,   res)=>       {
    res.send(`The messages are: ${messages}`)
})

export default router;
