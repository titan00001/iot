const express = require('express');
const router = express.Router();

const sessionModel = require('../model/model')


// return all data in database
// update reason in data by id

router.get('/', async (req, res) => {

    const sessions = await sessionModel.find({});

    try {
        res.render('pages/index', {data: sessions});
    } catch (err) {
        res.status(500).send(err);
    }
});


// router.get('/create', (req, res) => {
//     res.render('pages/create');
// });


router.post('/',async (req, res) => {
    
    try {
        await sessionModel.findByIdAndUpdate(req.body.id, { $set: { "reason" : req.body.reason } });
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err)
    }
    
});

module.exports = router;