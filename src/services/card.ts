import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import AuthorizePreAuth from "./resource/card/authorizePreAuth";
import CapturePreAuth from "./resource/card/capturePreAuth";
import CancelPreAuth from "./resource/card/cancelPreAuth";
import RefundPreAuth from "./resource/card/refundPreAuth";
import TokenizeCard from "./resource/card/tokenizeCard";
import Service from "../service";

class Card extends Service {
    private readonly _authorizePreAuth: AuthorizePreAuth;
    private readonly _capturePreAuth: CapturePreAuth;
    private readonly _cancelPreAuth: CancelPreAuth;
    private readonly _refundPreAuth: RefundPreAuth;
    private readonly _tokenizeCard: TokenizeCard;

    public constructor(client: Client) {
        super(client);
        this._authorizePreAuth = new AuthorizePreAuth(this);
        this._capturePreAuth = new CapturePreAuth(this);
        this._cancelPreAuth = new CancelPreAuth(this);
        this._refundPreAuth = new RefundPreAuth(this);
        this._tokenizeCard = new TokenizeCard(this);
    }

    public AuthorizePreAuth(requestPayload: ICard.AuthorizePreAuthRequest): Promise<ICard.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<ICard.AuthorizePreAuthRequest, ICard.Response>(
            this._authorizePreAuth,
            requestPayload,
            { isTokenRequired: true, isPost: true  }
        );
    }

    public AuthorizePreAuthWithToken(requestPayload: ICard.AuthorizePreAuthRequestWithToken): Promise<ICard.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<ICard.AuthorizePreAuthRequestWithToken, ICard.Response>(
            this._authorizePreAuth,
            requestPayload,
            { isTokenRequired: true }
        );
    }

    public CapturePreAuth(requestPayload: ICard.CapturePreAuthRequest): Promise<ICard.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<ICard.CapturePreAuthRequest, ICard.Response>(
            this._capturePreAuth,
            requestPayload,
            { isTokenRequired: true }
        );
    }

    public CancelPreAuth(requestPayload: ICard.CancelPreAuthRequest): Promise<ICard.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<ICard.CancelPreAuthRequest, ICard.Response>(
            this._cancelPreAuth,
            requestPayload,
            { isTokenRequired: true }
        );
    }

    public RefundPreAuth(requestPayload: ICard.RefundPreAuthRequest): Promise<ICard.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<ICard.RefundPreAuthRequest, ICard.Response>(
            this._refundPreAuth,
            requestPayload,
            { isTokenRequired: true }
        );
    }

    public Tokenize(requestPayload: ICard.TokenizeCardRequest): Promise<ICard.Response>{
        requestPayload.publicKey = this.client.config.publicKey;

        return getJsonResponse<ICard.TokenizeCardRequest, ICard.Response>(
            this._tokenizeCard,
            requestPayload,
            { isTokenRequired: true }
        );
    }

}

export default Card;
