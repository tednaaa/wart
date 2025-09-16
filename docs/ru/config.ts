import type { DefaultTheme } from 'vitepress';
import { defineAdditionalConfig } from 'vitepress';

export default defineAdditionalConfig({
	description: 'Почему Все Религии - Мусор',

	themeConfig: {
		search: { options: searchOptions() },
		nav: nav(),
		sidebar: sidebar(),

		editLink: {
			pattern: 'https://github.com/tednaaa/wart/edit/main/docs/:path',
			text: 'Редактировать страницу',
		},

		outline: { label: 'Содержание страницы' },

		docFooter: {
			prev: 'Предыдущая страница',
			next: 'Следующая страница',
		},

		lastUpdated: { text: 'Обновлено' },

		notFound: {
			title: 'СТРАНИЦА НЕ НАЙДЕНА',
			quote: 'Но если ты не изменишь направление и продолжишь искать, ты можешь оказаться там, куда направляешься.',
			linkLabel: 'перейти на главную',
			linkText: 'Отведи меня домой',
		},

		darkModeSwitchLabel: 'Оформление',
		lightModeSwitchTitle: 'Переключить на светлую тему',
		darkModeSwitchTitle: 'Переключить на тёмную тему',
		sidebarMenuLabel: 'Меню',
		returnToTopLabel: 'Вернуться к началу',
		langMenuLabel: 'Изменить язык',
		skipToContentLabel: 'Перейти к содержимому',
	},
});

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: 'На главную',
			link: '/ru/',
			activeMatch: '/ru/guide/',
		},
	];
}

function sidebar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Введение',
			collapsed: false,
			items: [
				{ text: 'Что такое VitePress?', link: 'what-is-vitepress' },
				{ text: 'Первые шаги', link: 'getting-started' },
				{ text: 'Маршрутизация', link: 'routing' },
				{ text: 'Развёртывание', link: 'deploy' },
			],
		},
	];
}

function searchOptions(): Partial<DefaultTheme.LocalSearchOptions> {
	return {
		translations: {
			button: {
				buttonText: 'Поиск',
				buttonAriaLabel: 'Поиск',
			},
			modal: {
				footer: {
					selectText: 'выбрать',
					selectKeyAriaLabel: 'Клавиша Enter',
					navigateText: 'перейти',
					navigateUpKeyAriaLabel: 'Стрелка вверх',
					navigateDownKeyAriaLabel: 'Стрелка вниз',
					closeText: 'закрыть',
					closeKeyAriaLabel: 'Клавиша Esc',
				},
			},
		},
	};
}
