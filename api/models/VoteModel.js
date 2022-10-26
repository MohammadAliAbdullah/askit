module.exports = (mongoose) => {
    //Vote Schema
    var voteSchema = mongoose.Schema(
        {
            answerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Answer',
                require: true
            },
            voteStatus: {type: String, require: true},
            activeStatus: Boolean,
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                require: true
            }
        },
        { timestamps: true }
    )
    voteSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const vote = mongoose.model('Vote', voteSchema);
    return vote;
}