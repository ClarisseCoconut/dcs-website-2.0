/** @type {import('./$types').LayoutLoad} */
export async function load({ data }) {
	return {
		title: data.global.title,
		description: data.global.description,
		favicon: data.global.favicon,
		primary_logo: data.global.primary_logo,
		secondary_logo: data.global.secondary_logo,
		secondary_logo_link: data.global.secondary_logo_link,
		contact_number: data.global.contact_number,
		contact_email: data.global.contact_email,
		address: data.global.address,
		quick_links: data.global.quick_links,
		facebook_link: data.global.facebook_link,
		x_link: data.global.x_link
	};
}
