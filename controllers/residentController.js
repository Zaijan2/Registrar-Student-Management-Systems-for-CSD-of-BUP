const Resident = require('../models/Resident');

exports.getAllResidents = async (req,res)=>{
  try{ const r = await Resident.find().sort({lastName:1}); res.json(r); }
  catch(err){ res.status(500).json({error:err.message}); }
};

exports.createResident = async (req,res)=>{
  try{ const r = new Resident(req.body); await r.save(); res.status(201).json(r); }
  catch(err){ res.status(400).json({error:err.message}); }
};

exports.updateResident = async (req,res)=>{
  try{
    const r = await Resident.findByIdAndUpdate(req.params.id, req.body, { new:true });
    if(!r) return res.status(404).json({msg:'Resident not found'});
    res.json(r);
  }catch(err){ res.status(400).json({error:err.message}); }
};

exports.deleteResident = async (req,res)=>{
  try{
    const r = await Resident.findByIdAndDelete(req.params.id);
    if(!r) return res.status(404).json({msg:'Resident not found'});
    res.json({msg:'Resident deleted'});
  }catch(err){ res.status(500).json({error:err.message}); }
};
