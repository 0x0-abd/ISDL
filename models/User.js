const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 20,
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
    name: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, 
{
    timestamps: true
});

UserSchema.statics.login = async function(username, password) {
    const user = await this.findOne({username});
    console.log(user)
    if(user) {
        const auth = await bcrypt.compare(password, foundUser.password);
        console.log(auth);
        if(auth) return user;
        throw Error('Incorrect Pasword')
    }
    throw Error('Incorrrect Username')
}

module.exports = mongoose.model("User", UserSchema)
