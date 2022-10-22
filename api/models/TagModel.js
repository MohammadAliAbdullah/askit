const mongoose = require("mongoose");

const Tag = mongoose.model("Tag",
    new mongoose.Schema({
        name: String,
        activeStatus: Boolean,
        createdAt: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
        { timestamps: true })
);

Role.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = Tag;