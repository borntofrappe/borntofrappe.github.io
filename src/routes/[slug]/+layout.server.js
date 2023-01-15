import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const response = await fetch('/log.json');
		const { entries } = await response.json();

		const { slug } = params;
		const i = entries.findIndex((d) => d.slug === slug);

		if (i === -1) {
			throw error(404, {
				message: `Log entry "${slug}" not found`,
				expected: true
			});
		}

		return {
			entry: entries[i],
			entries: entries.slice(Math.max(0, i - 2), i).reverse()
		};
	} catch (e) {
		if (e.body.expected) {
			throw error(e.status, e.body.message);
		} else {
			throw new Error('Unable to fetch log entries');
		}
	}
}
