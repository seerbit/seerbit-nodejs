
import {IncomingHttpHeaders} from "http";

interface ExceptionInterface {
    message: string;
    statusCode?: number;
    errorCode?: string;
    responseHeaders?: IncomingHttpHeaders;
    responseBody?: string;
}

class HttpClientException implements Error {
    public statusCode = 500;
    public errorCode?: string;
    public responseHeaders?: IncomingHttpHeaders;
    public readonly message: string;
    public readonly name: string;
    public responseBody?: string;

    public constructor(props: ExceptionInterface) {
        this.name = "HttpClientException";
        this.message = props.message;
        if(props.responseHeaders) this.responseHeaders = props.responseHeaders;
        if(props.responseBody) this.responseBody = props.responseBody;
        if(props.errorCode) this.errorCode = props.errorCode;
        if(props.statusCode) this.statusCode = props.statusCode;
    }
}

export default HttpClientException;
