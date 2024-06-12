const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.send(postData({
        "glossary": {
            "id": 0,
            "title": "example glossary"
        }
    }));
});

router.delete("/delete", (req, res) => {
    res.send(removeData());
});



module.exports = router;