module.exports = (mongoose) => {
    //comment Schema
    var commentSchema = mongoose.Schema(
        {
            description: { type: String, require: true },
            answerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Answer',
                require: true
            },
            activeStatus: Boolean,
            createdAt: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                require: true
            }
        },
        { timestamps: true }
    )
    commentSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const comment = mongoose.model('Comment', commentSchema);
    return comment;
}