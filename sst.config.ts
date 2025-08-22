/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "notesapp",
			removal: input?.stage === "production" ? "retain" : "remove",
			protect: ["production"].includes(input?.stage),
			home: "aws",
		};
	},
	async run() {
		await import("./infra/vpc");
		await import("./infra/db");
		await import("./infra/api");
		await import("./infra/email");
		const auth = await import("./infra/auth");
		const site = await import("./infra/site");
		return {
			SiteURL: site.site.url,
			AuthURL: auth.auth.url,
		};
	},
});
