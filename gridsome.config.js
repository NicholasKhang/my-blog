// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'My Blog',
	siteDescription: 'Welcome to my blog',
	siteUrl: 'https://nicholaskhang.github.io/',
	pathPrefix: '/my-blog',

	metadata: {
		author: "Nicholas Lee",
		logo: "NIC",
	},

	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'BlogPost',
				path: './post/**/*.md',
				refs: {
					tags: {
						typeName: "Tag",
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/plugin-google-analytics',
			options: {
				id: process.env.GOOGLE_ANALYTICS_ID
			}
		}
	],

	templates: {
		BlogPost: '/post/:title',
		Tag: '/tag/:id'
	},

	transformers: {
		//Add markdown support to all file-system sources
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
				'gridsome-plugin-remark-prismjs-all',
			]
		}
	}
}
