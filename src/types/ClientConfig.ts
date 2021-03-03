export default interface ClientConfig {
	// Coinbase
	apiKey: string;
	apiSecret: string;
	passphrase: string;
	useSandbox: boolean;

	// CryptoBot
	gui?: boolean;
	handsFree?: boolean;
}
