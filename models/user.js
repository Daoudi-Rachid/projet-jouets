const mongoose = require("mongoose")
const argon2 = require("argon2")

const userSchema = new mongoose.Schema({
    firstname: {
		type: String,
		required: true,
	},
	secondname: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	}
})

userSchema.pre("save", async function () {
	try {
		const hashedPassword = await argon2.hash(this.password)
		this.password = hashedPassword
	} catch (e) {
		console.log(e)
	}
})

const User = mongoose.model("User", userSchema)

module.exports = User