export class Logger {
	constructor() {}

	error(code?: string | number, message?: string, path?: string) {
		console.log("========================");
		console.log(`DATA FOR SEO API - ERROR`);
		console.log(`error code: ${code}`);
		if (message) console.log(`error message: ${message}`);
		if (path) console.log(`endpoint attempted: ${path}`);
		console.log("========================");
	}
}
