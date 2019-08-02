const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
let mongooseHidden = require('mongoose-hidden')()
const crypto = require('crypto')

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z_ ]+$/, 'is invalid'],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  salt: { type: String, hideJSON: true },
  hash: { type: String, hideJSON: true }
})

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
}

UserSchema.methods.validPassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex')
  return this.hash === hash
}

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' })
UserSchema.plugin(mongooseHidden)

UserSchema.set('toJSON', {
  virtuals: true
})

module.exports = {
  UserModel: model('User', UserSchema),
  UserSchema
}
