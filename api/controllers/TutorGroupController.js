/**
 * TutorGroupController
 *
 * @description :: Server-side logic for managing tutorgroups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TutorGroupController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
    //console.log(values);
    TutorGroup.create(params, function(err,tutorgroupcreate){
      if(err) return res.send(err,500);
      console.log(tutorgroupcreate);
      res.json(tutorgroupcreate);
    });
  },


  /**
   * `TutorGroupController.update()`
   */
  update: function (req, res) {
    var params =req.params.all();
    var id = req.param('id');
  
  TutorGroup.update(id,params,function(err,update){
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
   * `TutorGroupController.show()`
   */
  show: function (req, res) {
    var id = req.params('id');
    TutorGroup.FindOne(id,function(err,tutorgroupshow){
      if(err) return res.send(err, 500);
      res.json(tutorgroupshow);
    });
  },


  /**
   * `TutorGroupController.destroy()`
   */
  destroy: function (req, res) {
    var id =req.param('id');
    TutorGroup.destroy(id,function(err,destroy){
        if(err) return res.send(err,500);
        console.log(destroy);
        res.json({destroy :"delete"});
      });
  }
};

