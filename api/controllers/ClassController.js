/**
 * ClassController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ClassController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
    //console.log(values);
    Class.create(params, function(err,classcreate){
      if(err) return res.send(err,500);
      console.log(classcreate);
      res.json(classcreate);
    });
  },


  /**
   * `ClassController.update()`
   */
  update: function (req, res) {
    var params =req.params.all();
    var id = req.param('id');
  
 Class.update(id,params,function(err,update){
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
   * `ClassController.show()`
   */
  show: function (req, res) {
    var id = req.params('id');
    Class.FindOne(id,function(err,classshow){
      if(err) return res.send(err, 500);
      res.json(classshow);
    });
  },


  /**
   * `ClassController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
     Class.destroy(id,function(err,destroy){
        if(err) return res.send(err,500);
        console.log(destroy);
        res.json({destroy :"delete"});
      });
  }
};

