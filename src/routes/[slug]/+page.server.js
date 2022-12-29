import markdown from 'markdown-it';
import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';
import { existsSync } from 'node:fs';

export async function load({ params }) {
	const { slug } = params;

	const path = `src/log/${slug}.md`;

	if (!existsSync(path)) {
		throw error(404, 'Log entry not found');
	}

	try {
		const file = await readFile(path, { encoding: 'utf-8' });

		const { data, content } = matter(file);

		const { title, brief, entry } = data;

		const html = markdown().render(content);

		return {
			title,
			brief,
			entry,
			html
		};
	} catch (error) {
		throw new Error(`Unable to process log entry - ${slug}`);
	}
}
