import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'wart',

	rewrites: {
		'en/:rest*': ':rest*',
	},

	locales: {
		root: { label: 'English', lang: 'en-US', dir: 'ltr' },
		ru: { label: 'Русский', lang: 'ru-RU', dir: 'ltr' },
	},

	themeConfig: {
		search: { provider: 'local' },

		socialLinks: [{ icon: 'github', link: 'https://github.com/tednaaa/wart' }],
	},
});
