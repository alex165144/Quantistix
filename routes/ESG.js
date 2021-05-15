const { render } = require('ejs');
const express=require('express');
const router=express.Router();
const ESG=require('../models/ESG');
//Get Data
router.get('/', async (req,res) =>{
    //res.render('ESG/index')
    let searchOption=req.query.selectpicker;     
    try
    {
        const esgs= await ESG.find({ name: searchOption}).exec();
        res.render('ESG/index',{ esgs: JSON.stringify(esgs) });
    }
    catch
    {
        res.redirect('/');
    }
     
})

module.exports = router;