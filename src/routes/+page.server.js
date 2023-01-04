export async function load({ fetch }) {
	try {
		const response = await fetch('/log.json');
		const { entries } = await response.json();

		return {
			entries
		};
	} catch (error) {
		throw new Error('Unable to fetch log entries');
	}
}
