export class Logger {
    constructor() {

    }

    error(code?: string | number, message?: string) {
        console.log('========================');
        console.log(`DATA FOR SEO API - ERROR`);
        console.log(`error code: ${code}`);
        console.log(`error message: ${message}`);
        console.log('========================');
    }
}