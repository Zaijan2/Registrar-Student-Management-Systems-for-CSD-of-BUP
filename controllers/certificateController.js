const Certificate = require('../models/Certificate');
const Resident = require('../models/Resident');

exports.issueCertificate = async (req,res)=>{
  try{
    const { residentId, certType, purpose } = req.body;
    if(!await Resident.findById(residentId)) return res.status(404).json({msg:'Resident not found'});
    const cert = new Certificate({ residentId, certType, purpose, issuedBy:req.user.id });
    await cert.save();
    res.status(201).json(cert);
  }catch(err){ res.status(500).json({error:err.message}); }
};

exports.getCertificates = async (req,res)=>{
  try{
    const certs = await Certificate.find().populate('residentId','firstName lastName householdNo');
    res.json(certs);
  }catch(err){ res.status(500).json({error:err.message}); }
};
