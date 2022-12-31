import { readdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { readFileSync } from 'node:fs';

import matter from 'gray-matter';
import markdown from 'markdown-it';

import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const { origin } = url;

	const files = await readdir(resolve('src/log/'), { encoding: 'utf-8' });
	const posts = files
		.filter((file) => extname(file) === '.md')
		.map((file) => {
			const { data, content } = matter(readFileSync(`src/log/${file}`));
			const slug = file.split('.md')[0];
			const url = `${origin}/${slug}`;

			const tags = data.tags.split(/, ?/);
			const date = new Date(
				...data.datetime.split(/[-T:]/).map((d, i) => (i === 1 ? parseInt(d - 1) : d))
			);

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
		posts: [...posts].sort((a, b) => b.entry - a.entry)
	});
}
