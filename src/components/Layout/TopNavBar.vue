<template>
	<v-app-bar app color="navbar" elevate-on-scroll>
		<v-toolbar-title id="logo">
			<g-link to="/">
				{{ logo }}
			</g-link>
		</v-toolbar-title>

		<v-spacer />

		<v-btn icon>
			<a
				href="https://github.com/NicholasKhang"
				target="_blank"
				rel="noopener"
			>
				<v-icon size="36px">mdi-github</v-icon>
			</a>
		</v-btn>
		<v-btn icon>
			<a
				href="https://nicholaskhang.github.io"
				target="_blank"
				rel="noopener"
			>
				<v-icon size="36px">mdi-web</v-icon>
			</a>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	props: ["logo"],
};
</script>
