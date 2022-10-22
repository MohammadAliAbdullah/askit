module.exports = (mongoose) => {
    //Answer Schema
    var answerSchema = mongoose.Schema(
        {
            answer: String,
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question',
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
    answerSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const answer = mongoose.model('Answer', answerSchema);
    return answer;
}