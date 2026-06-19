const express=require('express');
const router=express.Router();
const {getCompanyData,updateCompanyData}=require("../controller/company");
router.get("/info",getCompanyData);
router.put("/info",updateCompanyData);
module.exports=router;