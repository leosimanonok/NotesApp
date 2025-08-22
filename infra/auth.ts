import { db } from "./db";
import { vpc } from "./vpc";
import { email } from "./email";

export const auth = new sst.aws.Auth("my_auth", {
	issuer: {
		handler: "packages/auth/index.handler",
		vpc,
		link: [db, email]
	}
});