import * as express from "express";
import * as passport from "passport";
import * as session from "express-session";
import {connectDB} from "./controller/services/microservices/db";
import { router } from "./routes/index";

export const app = express();

connectDB();

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
