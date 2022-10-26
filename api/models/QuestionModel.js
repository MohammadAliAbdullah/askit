module.exports = (mongoose) => {
    //Question Schema
    var questionSchema = mongoose.Schema(
        {
            title: { type: String, require: true },
            description: { type: String, require: true },
            tagId: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Tag"
                }
            ],
            activeStatus: Boolean,
            createdBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                require: true
            }
        },
        { timestamps: true }
    )
    questionSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const question = mongoose.model('Question', questionSchema);
    return question;
}