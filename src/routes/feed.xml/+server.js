export const prerender = true;

export async function GET({ url, fetch }) {
	const { origin } = url;

	const response = await fetch('/log.json');
	const { posts } = await response.json();

	/* prettier-ignore */
	const feed = `<?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>borntofrappe</title>
        <subtitle>The little corner on the web of one Gabriele Corti.</subtitle>
        <link href="${origin}/feed.xml" rel="self" />
        <link href="${origin}" />
        <id>borntofrappe.github.io</id>
        <author>
        <name>Gabriele Corti</name>
        <email>borntofrappe@gmail.com</email>
        </author>
        ${posts.map(({ url, title, html }) => `
            <entry>
                <title>${title}</title>
                <link href="${url}"/>
                <id>${url}</id>
                <content type="html"><![CDATA[${html}]]></content>
            </entry>`).join('')}
    </feed>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
