export const prerender = true;

import { origin } from '$lib/config.js';

export async function GET({ fetch }) {
	const response = await fetch('/log.json');
	const { posts } = await response.json();

	/* prettier-ignore */
	const feed = `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>Gabriele Corti's Log</title>
        <subtitle>Verbose entries by Gabriele Corti, in a rather pixelated corner of the web.</subtitle>
        <link href="${origin}/feed.xml" rel="self" />
        <link href="${origin}" />
        <updated>${new Date().toISOString()}</updated>
        <id>${origin}</id>
        <author>
        <name>Gabriele Corti</name>
        <email>borntofrappe@gmail.com</email>
        </author>
        ${posts.map(({ url, title, date, tags, html }) => `
            <entry>
                <title>${title}</title>
                <link href="${url}"/>
                <id>${url}</id>
                <updated>${new Date(date).toISOString()}</updated>
                ${tags.map((tag) => `<category>${tag}</category>`).join('')}
                <content type="html"><![CDATA[${html}]]></content>
            </entry>`).join('')}
    </feed>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
