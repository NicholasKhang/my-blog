// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'
import theme_colors from '~/util/theme_colors'

// Disqus comment
import VueDisqus from 'vue-disqus'

// Syntax highlighter for markdown code blocks - prismjs
// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-funky.css'
import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prismjs/themes/prism-twilight.css'

// Syntax highlighter for markdown code blocks - prism-all
// Select one of 3 themes
// import "gridsome-plugin-remark-prismjs-all/themes/night-owl.css"
// import "gridsome-plugin-remark-prismjs-all/themes/tomorrow.css"
// import "gridsome-plugin-remark-prismjs-all/themes/solarized.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"

// Social Sharing
import VueSocialSharing from 'vue-social-sharing'


import '~/assets/scss/main.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {

	// Vuetify MDI icon CDN
	head.link.push({
		rel: 'stylesheet',
		href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
	})

	// Vuetify font
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
	})

	// Theme color
	const opt = {
		theme: {
			dark: true,
			themes: {
				dark: theme_colors.dark
			}
		}
	}
	Vue.use(Vuetify)
	appOptions.vuetify = new Vuetify(opt);
	Vue.use(VueSocialSharing);

	// Disqus
	Vue.use(VueDisqus);

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)

	// Scroll behavior
	router.options.scrollBehavior = function (to, from, savedPosition) {
		if (to.hash) {
			return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
		}

		return window.scrollTo({ top: 0 });
	}
}
