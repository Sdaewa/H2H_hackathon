import * as passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../../../modal/user";

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: "secret",
	issuer: "accounts.examplesoft.com",
	audience: "yoursite.net",
};

export const myPassport = (passport: passport.PassportStatic) => {
	passport.use(
		new Strategy(opts, (jwt_payload, done) => {
			User.findOne({ id: jwt_payload.sub }, (err, user) => {
				if (err) {
					return done(err, false);
				}
				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
					// or you could create a new account
				}
			});
		})
	);
};
