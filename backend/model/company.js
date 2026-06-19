const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    fixedId:{type:Number,default:1,unique:true},
  name: 
         { type: String,
           required: true,
        default:"hansraj ventures"
           },
  about: { type: String, required: true,default:"we are here for delievering it services with best prices" },
  whychooseus: { type: String, required: true ,default:"we have a strong community and a trusted by many peoples."}
}, { timestamps: true });

module.exports = mongoose.model('company', companySchema);