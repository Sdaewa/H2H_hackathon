import express from "express";
import passport from "passport";
import session from "express-session";
import { router } from "./routes/index";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: process.env.SECRET || "my secret",
		resave: false,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.use((req, res) => {
	res.json({ msg: "This api does not exit" });
});

app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		if (err) {
			res.status(500).json({ msg: "something went wrong" });
		} else {
			next();
		}
	}
);
