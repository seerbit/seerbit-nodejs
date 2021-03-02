
import { ApiError } from "../../typings/apiError";

class ApiException implements Error {
    public error!: ApiError;
    public statusCode: number;
    public readonly message: string;
    public readonly name: string;

    public constructor(message: string, statusCode = 500) {
        this.name = "ApiException";
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default ApiException;
