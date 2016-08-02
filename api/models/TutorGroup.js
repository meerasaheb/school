/**
 * TutorGroup.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,


    attributes: {

        tutorRoom: { type: 'integer' },
      staff :{
        	model :'staff',
        	via : 'tutorgroups'
        },
        pupils :{
        	collection :'pupil',
        	via : 'tutorgroup'
        },

    }
};
