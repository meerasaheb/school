/**
 * FamilyController
 *
 * @description :: Server-side logic for managing Families
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FamilyController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
    //console.log(values);
    Family.create(params, function(err,create){
      if(err) return res.send(err,500);
      console.log(create);
      res.json(create);
    });
  },


  /**
   * `FamilyController.update()`
   */
  update: function (req, res) {
   var params =req.params.all();
    var id = req.param('id');
  
 Family.update(id,params,function(err,update){
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
   * `FamilyController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Family.FindOne(id,function(err,familyshow){
      if(err) return res.send(err, 500);
      res.json({familyshow});
    });
  },


  /**
   * `FamilyController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
    Family.findOne(id,function(err, destroy){
      if(err) return res.send(err,500);
      Family.destroy(id,function(err,destroy){
        if(err) return res.send(err,500);
        console.log(destroy);
        res.json({destroy :"delete"});
      });
    });
  }
};

