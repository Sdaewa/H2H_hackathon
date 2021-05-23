import * as passport from "passport";
import { ExtractJwt,  } from "passport-jwt";
import { User } from "../../../modal/user";

const opts = {
	jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey : "secret",
	issuer : "accounts.examplesoft.com",
	audience : "yoursite.net",
};
