module.exports = (mongoose) => {
    var tagSchema = mongoose.Schema(
        {
            name: String,
            activeStatus: Boolean,
            createdAt: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        },
        { timestamps: true }
    )
    tagSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const tag = mongoose.model("Tag", tagSchema);
    return tag;
}
