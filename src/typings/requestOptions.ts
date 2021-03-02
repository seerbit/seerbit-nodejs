import * as https from "https";

export namespace IRequest {
    export type Options = https.RequestOptions & {
        isTokenRequired?: boolean;
        isPost?: boolean;
        getQuery?: string;
    }
}

