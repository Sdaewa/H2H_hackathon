import * as mongoose from "mongoose";

interface IUser extends mongoose.Document {
	name: string;
	email: string;
	password: string;
}

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model<IUser>("user", userSchema);
