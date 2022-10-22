module.exports = (mongoose) => {
    //User Schema
    var userSchema = mongoose.Schema(
        {
            firstname: { type: String, require: true },
            lastname: { type: String, require: true },
            username: { type: String, unique: true, require: true },
            email: { type: String, unique: true, require: true },
            password: { type: String, require: true },
            roles: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Role"
                }
            ],
            activeStatus: Boolean,
            createdAt: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        },
        { timestamps: true }
    )
    userSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const User = mongoose.model('User', userSchema);
    return User;
}