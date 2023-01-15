import { readdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { readFileSync } from 'node:fs';

import matter from 'gray-matter';
import markdown from 'markdown-it';
import { getHighlighter } from 'shiki';

import { json } from '@sveltejs/kit';

import site from '$lib/site.js';

export const prerender = true;

export async function GET() {
	const files = await readdir(resolve('src/log/'), { encoding: 'utf-8' });
	const highlighter = await getHighlighter({ theme: 'rose-pine-moon' });

	const { origin } = site;

	const entries = files
		.filter((file) => extname(file) === '.md')
		.map((file) => {
			const { data, content } = matter(readFileSync(`src/log/${file}`));
			const slug = file.split('.md')[0];
			const url = `${origin}/${slug}`;

			const md = markdown({
				html: true,
				highlight: (code, lang) => highlighter.codeToHtml(code, { lang })
			});

			const html = md.render(content);

			return {
				url,
				slug,
				...data,
				html
			};
		});

	return json({
		entries: [...entries].sort((a, b) => b.date - a.date)
	});
}
