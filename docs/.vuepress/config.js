const { description } = require('../../package');

module.exports = {
	title: 'Laravel Dashboard Kit Docs',
	description: description,
	base: '/docs/',

	head: [
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		[
			'meta',
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
		],
	],

	themeConfig: {
		repo: 'https://github.com/laravel-dashboard-kit/docs',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		nav: [
			{
				text: 'Config',
				link: '/config/',
			},
			{
				text: 'Layouts',
				link: '/layouts/',
			},
			{
				text: 'Components',
				link: '/components/',
			},
		],
		sidebar: {
			'/config/': [
				{
					title: 'Config',
				},
			],
			'/layouts/': [
				{
					title: 'Layouts',
				},
			],
			'/components/': [
				{
					title: 'Components',
					collapsable: false,
					children: ['', 'alert', 'badge', 'button', 'form-image'],
				},
			],
		},
	},

	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
