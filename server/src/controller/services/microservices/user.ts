import * as bcrypt from "bcryptjs";
import { User } from "../../../modal/user";

export const saveToDatabase = (
	name: string,
	email: string,
	password: string
) => {
	const newUser = new User({
		name,
		email,
		password,
	});
	bcrypt
		.genSalt(10)
		.then((salt) => {
			bcrypt.hash(newUser.password, salt).then((hash) => {
				newUser.password = hash;
				newUser
					.save()
					.then((user) => console.log("user is saved to database"))
					.catch((err) => console.log(err));
			});
		})
		.catch((err) => console.log(err));
};
