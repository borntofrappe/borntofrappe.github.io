export async function load({ parent }) {
	const { post } = await parent();
	return {
		...post
	};
}
