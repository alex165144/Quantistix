const mongoose=require('mongoose');

const ESGSchema=new mongoose.Schema({

    name:String
},{
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
      }
    },
    toJSON: {
    transform: function (doc, ret) {
      delete ret._id;
    }
  }});

  module.exports = mongoose.model('companies',ESGSchema);
    