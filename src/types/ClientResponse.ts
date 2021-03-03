export default interface ClientResponse {
	error: boolean | {
		message: string,
		apiMessage: string
	};
	response?: unknown;
}
