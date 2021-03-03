import { CoinbasePro } from "coinbase-pro-node";
import { ClientConfig, ClientResponse } from "../types/";

export default class Client {
	private _client: CoinbasePro;
	private _config: ClientConfig;

	constructor(config: ClientConfig) {
		this._config = config;
		this._client = new CoinbasePro(this._config);
	}

	listCoinbaseAccounts(): Promise<ClientResponse> {
		return new Promise((res, rej) => {
			this._client.rest.account.listCoinbaseAccounts().then(accounts => {
				return res({ error: false, response: { accounts: accounts } });
			}).catch((err: ErrorEvent) => {
				return rej({ error: { message: "Failed to retrieve Coinbase account list.", apiMessage: err.message } });
			});
		});
	}
}
