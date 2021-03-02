

import {ClientRequest, IncomingHttpHeaders, IncomingMessage} from "http";
import {Agent, AgentOptions, request as httpsRequest} from "https";
import {HttpsProxyAgent} from "https-proxy-agent";
import {URL} from "url";
import Config from "../config";
import HttpClientException from "./httpClientException";
import {ApiError} from "../typings/apiError";
import ApiException from "../services/exception/apiException";
import ClientInterface from "./clientInterface";
import {ApiConstants} from "../constants/apiConstants";
import {IRequest} from "../typings/requestOptions";

class HttpURLConnectionClient implements ClientInterface {
    private static CHARSET = "utf-8";
    public proxy?: AgentOptions;
    private agentOptions!: AgentOptions;

    public request(
        endpoint: string, json: string, config: Config,
        requestOptions: IRequest.Options,
    ): Promise<string | HttpClientException | ApiException> {
        requestOptions.headers = {};
        requestOptions.timeout = config.connectionTimeoutMillis;

        // const secretKey = config.secretKey;
        const bearerToken = config.bearerToken;
        // const publicKey = config.publicKey;
        if (requestOptions.isTokenRequired && !bearerToken) {
            return Promise.reject(new ApiException("SeerBit Merchant API Token is required", 401));
        }
        if (requestOptions.isTokenRequired && config.bearerToken) {
            requestOptions.headers[ApiConstants.AUTHORIZATION] = "Bearer "+bearerToken;
        }else {
            // const authString = `${config.username}:${config.password}`;
            const authString = "h";
            const authStringEnc = Buffer.from(authString, "utf8").toString("base64");

            requestOptions.headers.Authorization = `Basic ${authStringEnc}`;
        }

        // if (secretKey) {
        //     // requestOptions.headers[ApiConstants.SECRET_KEY] = secretKey;
        // }
        // if (publicKey) {
        //     // requestOptions.headers[ApiConstants.PUBLIC_KEY] = publicKey;
        // }

        requestOptions.headers[ApiConstants.CONTENT_TYPE] = ApiConstants.APPLICATION_JSON_TYPE;

        const httpConnection: ClientRequest = this.createRequest(endpoint, requestOptions, json);
        return this.doPostRequest(httpConnection, json);
    }

    public post(endpoint: string, postParameters: [string, string][], config: Config): Promise<HttpClientException | string> {
        const postQuery: string = this.getQuery(postParameters);
        const connectionRequest: ClientRequest = this.createRequest(endpoint, {});
        return this.doPostRequest(connectionRequest, postQuery);
    }

    private createRequest(endpoint: string, requestOptions: IRequest.Options, json?: string): ClientRequest {
        if (!requestOptions.headers) {
            requestOptions.headers = {};
        }
        let buildEndpoint;
        if (json != null) {
             buildEndpoint = !requestOptions.isPost ? JSON.parse(json).query : "";
        }

        let url = new URL(endpoint);
        if (buildEndpoint != null) {
            url = new URL(endpoint + buildEndpoint);
        }

        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;

        if (this.proxy && this.proxy.host) {
            const { host, port, ...options } = this.proxy;
            requestOptions.agent = new HttpsProxyAgent({ host, port: port || 443, ...options });
        } else {
            requestOptions.agent = new Agent(this.agentOptions);
        }

        requestOptions.headers["Cache-Control"] = "no-cache";
        requestOptions.method = requestOptions.isPost ? ApiConstants.METHOD_POST : ApiConstants.METHOD_GET;
        requestOptions.headers[ApiConstants.ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;

        // requestOptions.headers[ApiConstants.USER_AGENT] = `${applicationName} ${Client.LIB_NAME}/${Client.LIB_VERSION}`;

        return httpsRequest(requestOptions);
    }

    private getQuery(params: [string, string][]): string {
        return params.map(([key, value]): string => `${key}=${value}`).join("&");
    }

    private doPostRequest(connectionRequest: ClientRequest, json: string): Promise<HttpClientException | string> {
        return new Promise((resolve, reject): void => {
            connectionRequest.flushHeaders();

            connectionRequest.on("response", (res: IncomingMessage): void => {

                const response: { headers: IncomingHttpHeaders; body: string; statusCode: number | undefined } = {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: ""
                };

                const getException = (responseBody: string): HttpClientException => new HttpClientException({
                    message: `HTTP Exception: ${response.statusCode}. ${res.statusMessage}`,
                    statusCode: response.statusCode,
                    errorCode: undefined,
                    responseHeaders: response.headers,
                    responseBody,
                });

                let exception: HttpClientException | Error = getException(response.body.toString());

                res.on("data", (chunk: string): void => {
                    response.body += chunk;
                });

                res.on("end", (): void => {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }

                    if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
                        try {
                            const formattedData: ApiError | {[key: string]: never} = JSON.parse(response.body);
                            const isApiError = "status" in formattedData;
                            const isRequestError = "errors" in formattedData;

                            if (isApiError) {
                                exception = new HttpClientException({
                                    message: `HTTP Exception: ${formattedData.status}. ${res.statusMessage}: ${formattedData.message}`,
                                    statusCode: formattedData.status,
                                    errorCode: formattedData.errorCode,
                                    responseHeaders: res.headers,
                                    responseBody: response.body,
                                });
                            } else if (isRequestError) {
                                exception = new Error(response.body);
                            } else {
                                exception = getException(response.body);
                            }
                        } catch (e) {
                            reject(exception);
                        } finally {
                            reject(exception);
                        }
                    }

                    resolve(response.body as string);
                });

                res.on("error", reject);
            });

            connectionRequest.on("timeout", (): void => {
                connectionRequest.abort();
            });
            connectionRequest.on("error", (e) => {console.log("error"); reject(new ApiException(e.message));  });
            connectionRequest.write(Buffer.from(json));
            connectionRequest.end();
        });
    }

}

export default HttpURLConnectionClient;
