const Request = require('../models/Request');
const Resident = require('../models/Resident');

exports.createRequest = async (req,res)=>{
  try{
    const { residentId, requestType, details } = req.body;
    if(!await Resident.findById(residentId)) return res.status(404).json({msg:'Resident not found'});
    const r = new Request({ residentId, requestType, details, status:'Pending' });
    await r.save(); res.status(201).json(r);
  }catch(err){ res.status(500).json({error:err.message}); }
};

exports.getRequests = async (req,res)=>{
  try{
    const items = await Request.find().populate('residentId','firstName lastName householdNo').sort({createdAt:-1});
    res.json(items);
  }catch(err){ res.status(500).json({error:err.message}); }
};

exports.updateRequestStatus = async (req,res)=>{
  try{
    const updated = await Request.findByIdAndUpdate(req.params.id,{status:req.body.status,updatedAt:new Date()},{new:true})
      .populate('residentId','firstName lastName householdNo');
    if(!updated) return res.status(404).json({msg:'Request not found'});
    res.json(updated);
  }catch(err){ res.status(500).json({error:err.message}); }
};
