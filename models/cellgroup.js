'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
      
var cellgroupSchema = new Schema({

  cellgroupName : { type: String, required: true, trim: true,
  index: { unique: true } }
  ,cellgroupEmailAddress: {type:String, required:true}
  ,cellgroupContact: {type:String, required:false}

  
});
      
var cellgroup = mongoose.model('cellgroup', cellgroupSchema);
      
module.exports = {

  cellgroup: cellgroup
};