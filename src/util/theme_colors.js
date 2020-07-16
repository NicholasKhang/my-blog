import colors from 'vuetify/es5/util/colors';

var dark_theme = Object.freeze({
	primary: colors.blue.darken2,
	accent: colors.grey.darken3,
	secondary: colors.amber.darken3,
	info: colors.teal.lighten1,
	warning: colors.amber.base,
	error: colors.deepOrange.accent4,
	success: colors.green.accent3,
	navbar: '#041b2b',

	// Label color
	gridsome: '#00a672',
	javascript: '#f7df1e',
	vue: '#41b883',
	misc: colors.pink,
});

export default {
	dark: dark_theme
}