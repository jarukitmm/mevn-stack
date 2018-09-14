const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    firstname:{tpye:String},
    lastname:{tpye:String},
    username:{type:String,unique:true,index:true},
    password:{type:String},
    email: {type: String,match:/.+\@.+\.+/},
    dateOfBirth:{type:Date}
})

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});


UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

let sch = null;
try {
    sch = mongoose.model('User', UserSchema);
    } catch (e) {
    sch = mongoose.model('User');
    }
    
module.exports = sch;