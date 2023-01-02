export async function load({ fetch }) {
	try {
		const response = await fetch('/log.json');
		const { posts } = await response.json();

		return {
			posts
		};
	} catch (error) {
		throw new Error('Unable to fetch log entries');
	}
}