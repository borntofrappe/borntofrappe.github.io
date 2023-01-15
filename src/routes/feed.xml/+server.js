export const prerender = true;

import site from '$lib/site.js';

export async function GET({ fetch }) {
	const response = await fetch('/log.json');
	const { entries } = await response.json();

	const { name, description, origin } = site;

	// whenever you implement tags add the following for each entry
	// ${tags.map((tag) => `<category term="${tag}" />`).join('')}

	/* prettier-ignore */
	const feed = `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>${name}</title>
        <subtitle>${description}</subtitle>
        <link href="${origin}/feed.xml" rel="self" />
        <link href="${origin}" />
        <updated>${new Date().toISOString()}</updated>
        <id>${origin}/</id>
        <author>
        <name>Gabriele Corti</name>
        <email>borntofrappe@gmail.com</email>
        </author>
        ${entries.map(({ url, title, date, html }) => `
            <entry>
                <title>${title}</title>
                <link href="${url}"/>
                <id>${url}/</id>
                <updated>${new Date(date).toISOString()}</updated>
                <content type="html"><![CDATA[${html}]]></content>
            </entry>`).join('')}
    </feed>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
