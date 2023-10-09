"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3,
        maxlength: 50,
    },
}, { collation: "departments", timestamps: true })

/* ------------------------------------------------------- */
const Department = mongoose.model('Department', departmentSchema)

module.exports = Department