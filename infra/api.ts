import { vpc } from "./vpc";
import { db } from "./db";

export const api = new sst.aws.ApiGatewayV2("my_api", {
	vpc,
	link: [db],
});

