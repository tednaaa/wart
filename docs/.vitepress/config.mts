import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'wart',

	locales: {
		root: {
			label: 'Русский',
			lang: 'ru',
			description: 'Почему Все Религии - Мусор',
			themeConfig: {
				nav: [{ text: 'Главная', link: '/' }],
				sidebar: [
					{
						text: 'Почему?',
						items: [
							{ text: 'ислам - Мусор?', link: '/islam/' },
							{ text: 'христианство - Мусор?', link: '/christianity/' },
							{ text: 'иудаизм - Мусор?', link: '/judaism/' },
						],
					},
				],
				docFooter: {
					prev: 'Предыдущая страница',
					next: 'Следующая страница',
				},
				outline: {
					label: 'Содержание страницы',
				},
				lastUpdated: {
					text: 'Обновлено',
				},
				darkModeSwitchLabel: 'Внешний вид',
				sidebarMenuLabel: 'Меню',
				returnToTopLabel: 'Вернуться к началу',
				langMenuLabel: 'Изменить язык',
			},
		},
		en: {
			label: 'English',
			lang: 'en',
			description: 'Why All Religions Are Trash',
			themeConfig: {
				nav: [{ text: 'Home', link: '/en/' }],
				sidebar: [
					{
						text: 'Why?',
						items: [
							{ text: 'islam Is Trash?', link: '/en/islam/' },
							{ text: 'christianity Is Trash?', link: '/en/christianity/' },
							{ text: 'judaism Is Trash?', link: '/en/judaism/' },
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
					root: {
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

		socialLinks: [{ icon: 'github', link: 'https://github.com/tednaaa/wart' }],
	},
});
