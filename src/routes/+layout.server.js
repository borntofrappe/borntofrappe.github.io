export async function load({ fetch }) {
	try {
		const response = await fetch('/log');
		const { posts } = await response.json();

		return {
			posts: posts.map((d) => ({
				...d,
				slug: d.url.split('/').pop()
			}))
		};
	} catch (error) {
		throw new Error('Unable to find log entries');
	}
}
