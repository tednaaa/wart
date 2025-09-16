import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'wart',
	description: 'Why All Religions Are Trash',

	locales: {
		root: {
			label: 'English',
			lang: 'en',
			themeConfig: {
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
			},
		},
		ru: {
			label: 'Русский',
			lang: 'ru',
			description: 'Почему Все Религии - Мусор',
			themeConfig: {
				nav: [
					{ text: 'Главная', link: '/ru/' },
				],
				sidebar: [
					{
						text: 'Ислам',
						items: [
							{ text: 'Почему Ислам - Мусор?', link: '/ru/islam/' },
						],
					},
				],
			},
		},
	},

	themeConfig: {
		search: {
			provider: 'local',
			options: {
				locales: {
					ru: {
						translations: {
							button: {
								buttonText: 'Поиск',
								buttonAriaLabel: 'Поиск',
							},
							modal: {
								displayDetails: 'Показать подробности',
								resetButtonTitle: 'Сбросить поиск',
								backButtonTitle: 'Закрыть поиск',
								noResultsText: 'Нет результатов для',
								footer: {
									selectText: 'выбрать',
									selectKeyAriaLabel: 'ввод',
									navigateText: 'перейти',
									navigateUpKeyAriaLabel: 'стрелка вверх',
									navigateDownKeyAriaLabel: 'стрелка вниз',
									closeText: 'закрыть',
									closeKeyAriaLabel: 'escape',
								},
							},
						},
					},
				},
			},
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/tednaaa/wart' },
		],
	},
});
