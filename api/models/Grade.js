/**
 * Grade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,


    attributes: {



        assessmentDate: { type: 'date' },

        grade: { type: 'string' },

        pupil :{
        	model :'pupil',
        	via : 'grades'
        },
        class :{
        	model :'class',
        	via : 'grades'
        }
    }
};
