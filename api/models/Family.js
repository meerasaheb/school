/**
 * Family.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,


    attributes: {

        fathernaName: { type: 'string' },

        motherName: { type: 'string' },

        fatherPhone: { type: 'integer' },

        motherPhone: { type: 'integer' },

        otherPhone: { type: 'integer' },

        homeAddress: { type: 'string' },

        pupils:{
        	collection:'pupil',
        	via : 'family'
        }
    }
};
