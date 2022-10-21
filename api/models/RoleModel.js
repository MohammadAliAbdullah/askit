const mongoose = require("mongoose");

const Role = mongoose.model("Role",
    new mongoose.Schema({
        name: String,
        createdAt: String
    },
        { timestamps: true })
);

module.exports = Role;