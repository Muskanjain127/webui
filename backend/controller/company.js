const Company=require("../model/company")






exports.getCompanyData = async (req, res) => {
  try {
    const company = await Company.findOne({fixedId:1});
    console.log(company)
    res.status(200).json(company)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
};
exports.updateCompanyData = async (req, res) => {
  try {
const {name,about,whychooseus}=req.body;
const result=await Company.findOneAndUpdate({fixedId:1},{name,about,whychooseus},{new:true,upsert:true});
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

