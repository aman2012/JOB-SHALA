const express=require('express');
const router=express.Router();
const {createjob} = require('../controller/jobcontroller');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn} = require('../middleware')
const Job = require('../db/Job.js');
const {getAllJobs} = require('../controller/jobcontroller');

router.route('/')
.get(getAllJobs)
.post(isLoggedIn,createjob);

router.route('/new').get(isLoggedIn,(req, res) => {
    res.render('jobs/jobform');
})


router.get('/:id', async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.render('jobs/jobpage',{job});
});


module.exports=router;