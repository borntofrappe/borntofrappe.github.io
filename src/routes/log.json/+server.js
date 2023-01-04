import { readdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { readFileSync } from 'node:fs';

import matter from 'gray-matter';
import markdown from 'markdown-it';

import { json } from '@sveltejs/kit';

import { origin } from '$lib/site.js';

export const prerender = true;

export async function GET() {
	const files = await readdir(resolve('src/log/'), { encoding: 'utf-8' });
	const entries = files
		.filter((file) => extname(file) === '.md')
		.map((file) => {
			const { data, content } = matter(readFileSync(`src/log/${file}`));
			const slug = file.split('.md')[0];
			const url = `${origin}/${slug}`;

			const tags = data.tags.split(/, ?/);

			const date = new Date(
				...data.datetime.split(/[-T:]/).map((d, i) => (i === 1 ? parseFloat(d - 1) : parseFloat(d)))
			);

			date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000 * -1);

			const html = markdown().render(content);

			return {
				url,
				slug,
				...data,
				date,
				tags,
				html
			};
		});

	return json({
		entries: [...entries].sort((a, b) => b.entry - a.entry)
	});
}
