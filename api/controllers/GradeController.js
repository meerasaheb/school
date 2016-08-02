/**
 * GradeController
 *
 * @description :: Server-side logic for managing grades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `GradeController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
    //console.log(values);
    Grade.create(params, function(err,gradecreate){
      if(err) return res.send(err,500);
      console.log(gradecreate);
      res.json(gradecreate);
    });
  },


  /**
   * `GradeController.update()`
   */
  update: function (req, res) {
    var params =req.params.all();
    var id = req.param('id');
  
 Grade.update(id,params,function(err,update){
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
   * `GradeController.show()`
   */
  show: function (req, res) {
    var id = req.params('id');
    Grade.FindOne(id,function(err,gradeshow){
      if(err) return res.send(err, 500);
      res.json(gradeshow);
    });
  },


  /**
   * `GradeController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
     Grade.destroy(id,function(err,destroy){
        if(err) return res.send(err,500);
        console.log(destroy);
        res.json({destroy :"delete"});
      });
  }
};

