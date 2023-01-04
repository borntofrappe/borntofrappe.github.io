export async function load({ parent }) {
	const { entry } = await parent();
	return {
		...entry
	};
}
