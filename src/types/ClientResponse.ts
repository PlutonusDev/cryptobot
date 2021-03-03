export default interface ClientResponse {
	error: boolean | {
		message: string
	};
	response?: Record<string, unknown>;
}
