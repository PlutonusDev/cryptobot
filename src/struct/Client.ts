import { CoinbasePro } from "coinbase-pro-node";
import { ClientConfig, ClientResponse } from "../types/";

export default class Client {
	private _client: CoinbasePro;
	private _config: ClientConfig;

	constructor(config: ClientConfig) {
		this._config = config;
		this._client = new CoinbasePro(this._config);
	}

	listAccounts(): Promise<ClientResponse> {
		return new Promise((res, rej) => {
			this._client.rest.account.listAccounts().then(accounts => {
				res({ error: false, response: { accounts: accounts } });
			}).catch(err => rej({ error: { message: "Failed to retrieve accounts list.", apiMessage: err.message } }));
		});
	}
}
