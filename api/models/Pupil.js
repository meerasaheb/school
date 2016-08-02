/**
 * Pupil.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,


    attributes: {

        pupilForename: { type: 'string' },

        pupilSurname: { type: 'string' },

        pupilDateOfBirth: { type: 'date' },

        pupilPhone: { type: 'integer' },

        pupilMedicalNOtes: { type: 'string' },

        pupilYear: { type: 'integer' },

        family : {
        	model :'family',
        	via :'pupils'
        },
        grades :{
        	collection : 'grade',
        	via : 'pupil'
        },
        tutorgroup :{
        	model :'tutorgroup',
        	via : 'pupils'
        }
    }
};
