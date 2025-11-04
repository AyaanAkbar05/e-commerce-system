export class AppError extends Error {
    message;
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.name = "AppError";
    }
}
export function handleError(error) {
    if (error instanceof AppError) {
        console.error(`App Error: ${error.message}`);
    }
    else if (error instanceof Error) {
        console.error(`Unexpected Error: ${error.message}`);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
//# sourceMappingURL=errorHandler.js.map