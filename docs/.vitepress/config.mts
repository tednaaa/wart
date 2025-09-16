import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'wart',
	description: 'Why All Religions Are Trash',
	themeConfig: {
		search: { provider: 'local' },

		nav: [
			{ text: 'Home', link: '/' },
		],
		sidebar: [
			{
				text: 'Islam',
				items: [
					{ text: 'Why Islam Is Trash?', link: '/islam' },
				],
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/tednaaa/wart' },
		],
	},
});
