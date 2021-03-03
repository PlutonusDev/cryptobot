import BaseClient from "./struct/Client";
import config from "./config";

const Client = new BaseClient(config);

Client.listAccounts().then(accounts => {
	console.log(accounts);
}).catch(e => {
	console.log(e);
});
