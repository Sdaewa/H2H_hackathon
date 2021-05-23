import { MyError } from "./error";
import {saveToDatabase} from "../services/microservices/user"

export class MyUser {
	name: string;
	email: string;
	password: string;
	constructor(name: string, email: string, password: string) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
    validate(){
        const errors = new MyError();
        if(this.name.length < 3){
            errors.add("name can not be less then 3 charectors");
        }
    }
    save(){
        saveToDatabase(this.name, this.email, this.password);
    }
}

