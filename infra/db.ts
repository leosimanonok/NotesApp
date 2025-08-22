import { vpc } from "./vpc";

export const db = new sst.aws.Postgres("my_db", {
	dev: {
		username: "postgres",
		password: "password",
		database: "local",
		port: 5432
	},
	vpc,
	transform: ($app.stage === "prod") ? {
		instance: {
			backupRetentionPeriod: 7,
			deletionProtection: true,
			deleteAutomatedBackups: false,
			allocatedStorage: 4,
			maxAllocatedStorage: 20,
		},
	} : undefined
});

