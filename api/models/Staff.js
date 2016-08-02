/**
 * Staff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,


    attributes: {

        staffForename: { type: 'string' },

        staffSurname: { type: 'string' },

        staffPhone: { type: 'integer' },

        staffAddress: { type: 'string' },

        staffBankAccount: { type: 'integer' },

        tutorgroups : {
        	collection :'tutorgroup',
        	via : 'staff'
        },
         classs : {
        	collection :'class',
        	via : 'staff'
        }
    }
};
