const { description } = require('../../package')

module.exports = {
	title: 'Laravel Dashboard Kit Docs',
	description: description,

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
				text: 'Docs',
				link: '/docs/',
			},
			{
				text: 'Config',
				link: '/config/',
			},
		],
		sidebar: {
			'/docs/': [
				{
					title: 'Docs',
					collapsable: false,
					children: ['', 'layouts'],
				},
			],
			'/config/': [
				{
					title: 'Config',
					collapsable: false,
					children: ['', 'foo'],
				},
			],
		},
	},

	plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
