const Announcement = require('../models/Announcement');

exports.getAnnouncements = async (req,res)=>{
  try{ const list = await Announcement.find().sort({createdAt:-1}); res.json(list); }
  catch(err){ res.status(500).json({error:err.message}); }
};

exports.createAnnouncement = async (req,res)=>{
  try{
    const { title, content } = req.body;
    const ann = new Announcement({ title, content, createdBy:req.user.id });
    await ann.save(); res.status(201).json(ann);
  }catch(err){ res.status(500).json({error:err.message}); }
};
