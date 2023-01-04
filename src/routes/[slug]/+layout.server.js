import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const response = await fetch('/log.json');
		const { posts } = await response.json();

		const { slug } = params;
		const i = posts.findIndex((d) => d.slug === slug);

		if (i === -1) {
			throw error(404, {
				message: `Log entry "${slug}" not found`,
				expected: true
			});
		}

		const entries = [posts[i - 1], posts[i + 1]].filter((d) => d);

		return {
			post: posts[i],
			entries
		};
	} catch (e) {
		if (e.body.expected) {
			throw error(e.status, e.body.message);
		} else {
			throw new Error('Unable to fetch log entries');
		}
	}
}
