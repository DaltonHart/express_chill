const Band = require("../models/bands");

const index = function(req,res){
  Band.all(function(err,allBands){
    if(err) res.status(500).json({message: "uh oh spaghettios"});

    return res.status(200).json({
      data: allBands
    });

  });
}


module.exports = {
  index
}