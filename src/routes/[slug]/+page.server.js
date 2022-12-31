import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
	const { href } = url;

	try {
		const response = await fetch('/log');
		const { posts } = await response.json();

		const post = posts.find((d) => d.url === href);

		if (!post) {
			throw error(404, {
				message: 'Log entry not found',
				expected: true
			});
		}

		return {
			...post
		};
	} catch (e) {
		if (e.body.expected) {
			throw error(e.status, e.body.message);
		} else {
			throw new Error(`Unable to find log entry - ${href}`);
		}
	}
}
