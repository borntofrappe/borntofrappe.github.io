import { readdir } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import matter from 'gray-matter';

export async function load() {
	try {
		const files = await readdir(resolve('src/blog/'), { encoding: 'utf-8' });

		const posts = files
			.filter((file) => extname(file) === '.md')
			.map((file) => {
				const slug = file.split('.md')[0];

				const { data } = matter(readFileSync(`src/blog/${file}`));
				const { title, brief, entry } = data;

				return {
					slug,
					title,
					brief,
					entry
				};
			});

		return {
			posts: [...posts].sort((a, b) => a.entry - b.entry)
		};
	} catch (error) {
		throw new Error('Unable to read blog folder');
	}
}
