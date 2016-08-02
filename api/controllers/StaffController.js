/**
 * StaffController
 *
 * @description :: Server-side logic for managing staff
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `StaffController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
    //console.log(values);
    Staff.create(params, function(err,staffcreate){
      if(err) return res.send(err,500);
      console.log(staffcreate);
      res.json(staffcreate);
    });
  },


  /**
   * `StaffController.update()`
   */
  update: function (req, res) {
    var params =req.params.all();
    var id = req.param('id');
  
  Staff.update(id,params,function(err,update){
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
   * `StaffController.show()`
   */
  show: function (req, res) {
    var id = req.params('id');
    Staff.FindOne(id,function(err,staffshow){
      if(err) return res.send(err, 500);
      res.json(staffshow);
    });
  },


  /**
   * `StaffController.destroy()`
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'destroy() is not implemented yet!'
    });
  }
};

