var mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var FormSchema = new mongoose.Schema({

    email: {
       type:String
    },

    title:{

        type: String
    } ,



    // questions: [{
    //     // open: { type: Boolean, default: false },
    //     questionText: String,
    //     options: [{
    //         optionText: String,

    //     }]
    // }],
    questions:{
        type:Array
    },

    stared: { type: Boolean, default: false },

    formType: { type: String, default: "anonymous" }

}, { timestamps: true });

FormSchema.plugin(mongoosePaginate);
Form = mongoose.model('Form', FormSchema, 'Form');

module.exports = Form; 