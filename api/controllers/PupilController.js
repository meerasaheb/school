/**
 * PupilController
 *
 * @description :: Server-side logic for managing pupils
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PupilController.create()`
   */
  create: function (req, res) {
    
    var params = req.params.all();
    //console.log(values);
    Pupil.create(params, function(err,pupilcreate){
      if(err) return res.send(err,500);
      console.log(pupilcreate);
      res.json(pupilcreate);
    });
  },


  /**
   * `PupilController.update()`
   */
  update: function (req, res) {
    var params =req.params.all();
    var id = req.param('id');
  
  Pupil.update(id,params,function(err,update){
    console.log("uuu");
    if(err){
      console.log(err);
      return res.send(err,500);
    }
   
    console.log(update);
    res.json({update:"update"});
    });
  },


  /**
   * `PupilController.show()`
   */
  show: function (req, res) {
    var id = req.params('id');
    Pupil.FindOne(id,function(err,pupilshow){
      if(err) return res.send(err, 500);
      res.json(pupilshow);
    });
  },


  /**
   * `PupilController.destroy()`
   */
  destroy: function (req, res) {
    var id =req.param('id');
    Pupil.destroy(id,function(err,destroy){
        if(err) return res.send(err,500);
        console.log(destroy);
        res.json({destroy :"delete"});
      });
  }
};

