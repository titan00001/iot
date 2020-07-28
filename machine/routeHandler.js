const express = require('express');
const router = express.Router();

const sessionModel = require('../model/model')


// router.get('/', (req, res) => {
//     console.log(req);
//     res.send("Hello.... You sent a get request to machine Request Handler");
// });



// $ curl -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://127.0.0.1:3000/ {"MyKey":"My Value"}

// curl -X POST -H "Content-Type: application/json" \
//     -d '{"name": "linuxize", "email": "linuxize@example.com"}' \
//     https://example/contact


router.post('/',async (req, res) => {

    const session = new sessionModel(req.body);

    try {
        await session.save();
        res.status(200).send();
      } catch (err) {
        res.status(500).send(err);
      }
    
});


module.exports = router;