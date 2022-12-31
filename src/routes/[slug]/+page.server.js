import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const response = await fetch('/log');
		const { posts } = await response.json();

		const { slug } = params;
		const post = posts.find((d) => d.slug === slug);

		if (!post) {
			throw error(404, {
				message: `Log entry "${slug}" not found`,
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
			throw new Error('Unable to fetch log entries');
		}
	}
}
