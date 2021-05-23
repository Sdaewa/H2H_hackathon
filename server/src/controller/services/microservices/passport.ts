import { PassportStatic } from "passport";
import { Strategy } from "passport-local";
import { User } from "../../../modal/user";
import * as bcrypt from "bcryptjs";

export const myPassport = (passport: PassportStatic) => {
	passport.use(
		new Strategy({ usernameField: "email" }, (email, password, done) => {
			User.findOne({ email: email })
				.then((user) => {
					if (!user) {
						return done("user does not exits", false);
					} else {
						bcrypt.compare(password, user.password, (err, isMatch) => {
							if (err) {
								return done(err, false);
							} else if (isMatch) {
								return done(null, user);
							} else {
								return done("password did not match", false);
							}
						});
					}
				})
				.catch((err) => console.log(err));
		})
	);
	passport.serializeUser((user: any, done) => {
		done(null, user.id);
	});
	passport.deserializeUser((userId, done) => {
		User.findById(userId)
			.then((user) => {
				if (!user) {
					return done("can not find user", false);
				} else {
					return done(null, user);
				}
			})
			.catch((err) => console.log(err));
	});
};
