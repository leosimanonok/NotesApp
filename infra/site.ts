import { auth } from "./auth";
import { db } from "./db";
import { email } from "./email";
import { vpc } from "./vpc";

export const site = new sst.aws.Nextjs("my_site", {
	path: "packages/aws-nextjs",
	environment:
	{
		STAGE: $app.stage,
		NEXT_PUBLIC_SITE_URL: "http://localhost:3000",

	},
	link: [db, email, auth],
	vpc
});